
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  currentProcessTime: z.coerce.number().min(1, 'Current process time must be at least 1 minute'),
  improvedProcessTime: z.coerce.number().min(0, 'Improved process time cannot be negative'),
  hourlyCost: z.coerce.number().min(1, 'Hourly cost must be at least $1'),
  processFrequency: z.coerce.number().min(1, 'Process frequency must be at least 1 time per month'),
  numberOfEmployees: z.coerce.number().min(1, 'Must have at least 1 employee'),
});

type FormValues = z.infer<typeof formSchema>;

type EfficiencyResult = {
  timeSavingsPerProcess: number;
  monthlySavingsHours: number;
  annualSavingsHours: number;
  annualCostSavings: number;
  improvementPercentage: number;
  fiveYearSavings: number;
};

export function OperationsEfficiencyCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<EfficiencyResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentProcessTime: 60,
      improvedProcessTime: 15,
      hourlyCost: 50,
      processFrequency: 30,
      numberOfEmployees: 5,
    },
  });

  const calculateEfficiency = (values: FormValues) => {
    const { currentProcessTime, improvedProcessTime, hourlyCost, processFrequency, numberOfEmployees } = values;
    
    // Time savings in minutes per process
    const timeSavingsPerProcess = currentProcessTime - improvedProcessTime;
    
    // Monthly savings in hours
    const monthlySavingsHours = (timeSavingsPerProcess * processFrequency * numberOfEmployees) / 60;
    
    // Annual savings in hours
    const annualSavingsHours = monthlySavingsHours * 12;
    
    // Annual cost savings
    const annualCostSavings = annualSavingsHours * hourlyCost;
    
    // Improvement percentage
    const improvementPercentage = (timeSavingsPerProcess / currentProcessTime) * 100;
    
    // 5-year savings
    const fiveYearSavings = annualCostSavings * 5;
    
    setResult({
      timeSavingsPerProcess,
      monthlySavingsHours,
      annualSavingsHours,
      annualCostSavings,
      improvementPercentage,
      fiveYearSavings,
    });
  };

  const onSubmit = (values: FormValues) => {
    calculateEfficiency(values);
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
              <Settings className="h-5 w-5 text-masarna-teal" />
            </div>
            <DialogTitle>Operations Efficiency Calculator</DialogTitle>
          </div>
          <DialogDescription>
            Estimate time and cost savings from improving operational processes.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="currentProcessTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Process Time (minutes)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="improvedProcessTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Improved Process Time (minutes)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="hourlyCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hourly Cost ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Labor cost per hour
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="processFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Frequency</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Times per month
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="numberOfEmployees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employees</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      Who perform this task
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
            <h3 className="text-lg font-medium mb-3 text-masarna-teal">Efficiency Results</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">Annual Cost Savings</p>
                  <p className="text-xl font-bold text-masarna-teal">${result.annualCostSavings.toLocaleString()}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Process improved by {result.improvementPercentage.toFixed(0)}%</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Time Saved Per Process</p>
                <p className="text-lg font-medium">{result.timeSavingsPerProcess} minutes</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Annual Time Saved</p>
                <p className="text-lg font-medium">{result.annualSavingsHours.toFixed(0)} hours</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">Monthly Time Saved</p>
                <p className="text-lg font-medium">{result.monthlySavingsHours.toFixed(1)} hours</p>
              </div>
              <div className="bg-white p-3 rounded border border-masarna-teal/20">
                <p className="text-sm font-medium text-gray-500">5-Year Savings</p>
                <p className="text-lg font-medium">${result.fiveYearSavings.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded border border-masarna-teal/20 text-sm">
              <p className="font-medium mb-1">💡 Efficiency Insights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Time savings often lead to both cost reduction and capacity increase</li>
                <li>Consider the improved employee experience and reduced burnout</li>
                <li>Reinvest time saved into higher-value activities</li>
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
