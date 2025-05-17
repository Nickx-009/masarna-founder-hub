
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  initialFunding: z.coerce.number().min(1, 'Funding must be at least $1'),
  monthlyExpenses: z.coerce.number().min(1, 'Expenses must be at least $1'),
  monthlyRevenue: z.coerce.number().min(0, 'Revenue cannot be negative'),
});

type FormValues = z.infer<typeof formSchema>;

export function StartupRunwayCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialFunding: 500000,
      monthlyExpenses: 50000,
      monthlyRevenue: 10000,
    },
  });

  const calculateRunway = (values: FormValues) => {
    const { initialFunding, monthlyExpenses, monthlyRevenue } = values;
    const burnRate = monthlyExpenses - monthlyRevenue;
    
    if (burnRate <= 0) {
      setResult(-1); // Infinite runway (profitable)
    } else {
      const runway = initialFunding / burnRate;
      setResult(runway);
    }
  };

  const onSubmit = (values: FormValues) => {
    calculateRunway(values);
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
              <DollarSign className="h-5 w-5 text-masarna-teal" />
            </div>
            <DialogTitle>Startup Runway Calculator</DialogTitle>
          </div>
          <DialogDescription>
            Calculate how long your current funding will last based on your monthly expenses and revenue.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="initialFunding"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Funding ($)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Total amount of funding available
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="monthlyExpenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Expenses ($)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Total monthly operating expenses
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="monthlyRevenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Revenue ($)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Current monthly revenue (if any)
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
        
        {result !== null && (
          <div className="mt-6 p-4 bg-masarna-teal/10 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-masarna-teal">Runway Result</h3>
            {result === -1 ? (
              <div>
                <p className="text-xl font-bold">Your startup is profitable! 🎉</p>
                <p className="text-sm text-gray-600 mt-1">
                  Your monthly revenue exceeds expenses, so theoretically your runway is infinite as long as this remains true.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xl font-bold">{result.toFixed(1)} months</p>
                <p className="text-sm text-gray-600 mt-1">
                  This is approximately {(result / 12).toFixed(1)} years.
                  {result < 6 && " You should consider looking for additional funding soon."}
                  {result >= 6 && result < 12 && " This gives you a decent runway to achieve your next milestones."}
                  {result >= 12 && " You have a healthy runway to execute your business plan."}
                </p>
              </div>
            )}
            <div className="mt-4 p-3 bg-white rounded border border-masarna-teal/20 text-sm">
              <p className="font-medium mb-1">💡 Pro Tips:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Most investors recommend having at least 12-18 months of runway</li>
                <li>Consider creating multiple scenarios (best-case, realistic, worst-case)</li>
                <li>Regularly update your calculation as your burn rate changes</li>
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
