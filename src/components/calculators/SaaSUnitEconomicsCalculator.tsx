
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  cac: z.coerce.number().min(1, 'CAC must be at least $1'),
  arpu: z.coerce.number().min(1, 'ARPU must be at least $1'),
  churnRate: z.coerce.number().min(0.1, 'Churn rate must be at least 0.1%').max(100, 'Churn rate cannot exceed 100%'),
  grossMargin: z.coerce.number().min(0, 'Gross margin cannot be negative').max(100, 'Gross margin cannot exceed 100%'),
});

type FormValues = z.infer<typeof formSchema>;

type UnitEconomicsResult = {
  ltv: number;
  ltvCacRatio: number;
  paybackPeriod: number;
  monthlyChurn: number;
  avgCustomerLifetime: number;
};

export function SaaSUnitEconomicsCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<UnitEconomicsResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cac: 1000,
      arpu: 100,
      churnRate: 5,
      grossMargin: 80,
    },
  });

  const calculateUnitEconomics = (values: FormValues) => {
    const { cac, arpu, churnRate, grossMargin } = values;
    
    // Monthly churn rate
    const monthlyChurn = churnRate / 100;
    
    // Average customer lifetime in months
    const avgCustomerLifetime = 1 / monthlyChurn;
    
    // LTV calculation
    const ltv = arpu * avgCustomerLifetime * (grossMargin / 100);
    
    // LTV/CAC ratio
    const ltvCacRatio = ltv / cac;
    
    // Payback period in months
    const paybackPeriod = cac / (arpu * (grossMargin / 100));
    
    setResult({
      ltv,
      ltvCacRatio,
      paybackPeriod,
      monthlyChurn,
      avgCustomerLifetime,
    });
  };

  const onSubmit = (values: FormValues) => {
    calculateUnitEconomics(values);
  };

  const resetCalculator = () => {
    form.reset();
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-masarna-teal/10">
              <BarChart className="h-5 w-5 text-masarna-teal" />
            </div>
            <DialogTitle>SaaS Unit Economics Calculator</DialogTitle>
          </div>
          <DialogDescription>
            Calculate key SaaS metrics like Customer Lifetime Value (LTV) and LTV/CAC ratio.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="cac"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Acquisition Cost ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Average cost to acquire one customer
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="arpu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Monthly Revenue per User ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="churnRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Churn Rate (%)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} />
                    </FormControl>
                    <FormDescription>
                      % of customers that leave each month
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="grossMargin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gross Margin (%)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} />
                    </FormControl>
                    <FormDescription>
                      Revenue minus variable costs
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
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
            <h3 className="text-lg font-medium mb-3 text-masarna-teal">SaaS Unit Economics Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Customer Lifetime Value (LTV)</p>
                <p className="text-xl font-bold">${result.ltv.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">LTV/CAC Ratio</p>
                <p className="text-xl font-bold">{result.ltvCacRatio.toFixed(2)}x</p>
                <p className="text-xs text-gray-500 mt-1">
                  {result.ltvCacRatio < 1 && "Critical issue: LTV < CAC"}
                  {result.ltvCacRatio >= 1 && result.ltvCacRatio < 3 && "Needs improvement: Target 3x+"}
                  {result.ltvCacRatio >= 3 && "Good ratio: 3x+ is healthy"}
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Payback Period</p>
                <p className="text-xl font-bold">{result.paybackPeriod.toFixed(1)} months</p>
                <p className="text-xs text-gray-500 mt-1">
                  {result.paybackPeriod > 18 && "Long payback: Consider optimizing"}
                  {result.paybackPeriod <= 18 && result.paybackPeriod > 12 && "Average payback period"}
                  {result.paybackPeriod <= 12 && "Good payback: Under 12 months is ideal"}
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Average Customer Lifetime</p>
                <p className="text-xl font-bold">{result.avgCustomerLifetime.toFixed(1)} months</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded border border-masarna-teal/20 text-sm">
              <p className="font-medium mb-1">💡 SaaS Metrics Insights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Target an LTV/CAC ratio of 3:1 or higher for a healthy business</li>
                <li>Aim to recover CAC within 12 months for good cash flow</li>
                <li>Reducing churn by just 1% can dramatically increase LTV</li>
                <li>Focus on expansion revenue to improve unit economics</li>
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
