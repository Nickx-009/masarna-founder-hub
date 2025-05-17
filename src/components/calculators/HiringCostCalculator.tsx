
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  baseSalary: z.coerce.number().min(1, 'Base salary must be at least $1'),
  benefitsPercent: z.coerce.number().min(0, 'Benefits percentage cannot be negative').max(100, 'Benefits percentage cannot exceed 100%'),
  recruitmentCost: z.coerce.number().min(0, 'Recruitment cost cannot be negative'),
  onboardingCost: z.coerce.number().min(0, 'Onboarding cost cannot be negative'),
  equipmentCost: z.coerce.number().min(0, 'Equipment cost cannot be negative'),
});

type FormValues = z.infer<typeof formSchema>;

type HiringCostResult = {
  annualSalary: number;
  annualBenefits: number;
  totalOnboarding: number;
  firstYearTotal: number;
  ongoingAnnualCost: number;
};

export function HiringCostCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<HiringCostResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      baseSalary: 100000,
      benefitsPercent: 30,
      recruitmentCost: 15000,
      onboardingCost: 5000,
      equipmentCost: 3000,
    },
  });

  const calculateHiringCost = (values: FormValues) => {
    const { baseSalary, benefitsPercent, recruitmentCost, onboardingCost, equipmentCost } = values;
    
    const annualSalary = baseSalary;
    const annualBenefits = baseSalary * (benefitsPercent / 100);
    const totalOnboarding = recruitmentCost + onboardingCost + equipmentCost;
    const ongoingAnnualCost = annualSalary + annualBenefits;
    const firstYearTotal = ongoingAnnualCost + totalOnboarding;
    
    setResult({
      annualSalary,
      annualBenefits,
      totalOnboarding,
      firstYearTotal,
      ongoingAnnualCost,
    });
  };

  const onSubmit = (values: FormValues) => {
    calculateHiringCost(values);
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
              <Users className="h-5 w-5 text-masarna-teal" />
            </div>
            <DialogTitle>Hiring Cost Calculator</DialogTitle>
          </div>
          <DialogDescription>
            Calculate the true cost of hiring a new employee beyond just the base salary.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="baseSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base Annual Salary ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="benefitsPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Benefits (% of salary)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" {...field} />
                    </FormControl>
                    <FormDescription>
                      Health insurance, retirement, etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="recruitmentCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recruitment Cost ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="onboardingCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Onboarding Cost ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="equipmentCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Equipment Cost ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
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
            <h3 className="text-lg font-medium mb-3 text-masarna-teal">Total Hiring Costs</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded border border-masarna-teal/20">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">First Year Total Cost</p>
                  <p className="text-xl font-bold text-masarna-teal">${result.firstYearTotal.toLocaleString()}</p>
                </div>
                <div className="mt-4 border-t pt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-gray-500">Annual Salary</p>
                      <p className="font-medium">${result.annualSalary.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Annual Benefits</p>
                      <p className="font-medium">${result.annualBenefits.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">One-time Costs</p>
                      <p className="font-medium">${result.totalOnboarding.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ongoing Annual Cost</p>
                      <p className="font-medium">${result.ongoingAnnualCost.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded border border-masarna-teal/20 text-sm">
              <p className="font-medium mb-1">💡 Hiring Cost Insights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>The true cost of an employee is typically 1.25-1.4x their base salary</li>
                <li>Don't forget ongoing costs like software licenses, workspace, and training</li>
                <li>Consider the productivity ramp-up period (typically 3-6 months)</li>
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
