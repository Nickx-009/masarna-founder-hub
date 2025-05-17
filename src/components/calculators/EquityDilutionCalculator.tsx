
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Percent } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  currentOwnershipPercent: z.coerce.number().min(0.01).max(100, 'Ownership percent must be between 0.01 and 100'),
  investmentAmount: z.coerce.number().min(1, 'Investment amount must be at least $1'),
  preMoneyValuation: z.coerce.number().min(1, 'Valuation must be at least $1'),
});

type FormValues = z.infer<typeof formSchema>;

type DilutionResult = {
  newOwnershipPercent: number;
  dilutionPercent: number;
  investorOwnershipPercent: number;
  postMoneyValuation: number;
};

export function EquityDilutionCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<DilutionResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentOwnershipPercent: 100,
      investmentAmount: 500000,
      preMoneyValuation: 2000000,
    },
  });

  const calculateDilution = (values: FormValues) => {
    const { currentOwnershipPercent, investmentAmount, preMoneyValuation } = values;
    
    const postMoneyValuation = preMoneyValuation + investmentAmount;
    const investorOwnershipPercent = (investmentAmount / postMoneyValuation) * 100;
    const newOwnershipPercent = currentOwnershipPercent * (1 - investorOwnershipPercent / 100);
    const dilutionPercent = ((currentOwnershipPercent - newOwnershipPercent) / currentOwnershipPercent) * 100;
    
    setResult({
      newOwnershipPercent,
      dilutionPercent,
      investorOwnershipPercent,
      postMoneyValuation,
    });
  };

  const onSubmit = (values: FormValues) => {
    calculateDilution(values);
  };

  const resetCalculator = () => {
    form.reset();
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-masarna-teal/10">
              <Percent className="h-5 w-5 text-masarna-teal" />
            </div>
            <DialogTitle>Equity Dilution Calculator</DialogTitle>
          </div>
          <DialogDescription>
            Understand how investment rounds will affect your ownership percentage.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="currentOwnershipPercent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Ownership (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your current ownership percentage
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="preMoneyValuation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pre-Money Valuation ($)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your company's valuation before the investment
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="investmentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    The amount being invested in this round
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-masarna-teal hover:bg-masarna-teal/90">
                Calculate
              </Button>
              <Button type="button" onClick={resetCalculator} variant="outline" className="flex-1">
                Reset
              </Button>
            </div>
          </form>
        </Form>
        
        {result && (
          <div className="mt-6 p-4 bg-masarna-teal/10 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-masarna-teal">Dilution Results</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Your New Ownership</p>
                <p className="text-xl font-bold">{result.newOwnershipPercent.toFixed(2)}%</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Dilution</p>
                <p className="text-xl font-bold">{result.dilutionPercent.toFixed(2)}%</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Investor Ownership</p>
                <p className="text-xl font-bold">{result.investorOwnershipPercent.toFixed(2)}%</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Post-Money Valuation</p>
                <p className="text-xl font-bold">${(result.postMoneyValuation).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded border border-masarna-teal/20 text-sm">
              <p className="font-medium mb-1">💡 Equity Insights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Expect 15-25% dilution per major funding round</li>
                <li>Remember that founder equity often vests over 4 years</li>
                <li>Consider setting aside an employee option pool before fundraising</li>
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
