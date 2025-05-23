
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().optional(),
  interest: z.string().min(1, { message: "Please select an area of interest." }),
});

export type LeadFormData = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  onSubmit: (data: LeadFormData) => void;
  defaultInterest?: string;
  isSubmitting?: boolean;
}

const LeadCaptureForm = ({ 
  onSubmit, 
  defaultInterest = "",
  isSubmitting = false
}: LeadCaptureFormProps) => {
  const form = useForm<LeadFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      interest: defaultInterest,
    },
  });

  const handleSubmit = (data: LeadFormData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="+1 234 567 8900" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area of Interest</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="human-resources">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="compliance">Legal & Compliance</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                  <SelectItem value="growth">Growth & Scaling</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-masarna-orange hover:bg-masarna-orange/90 mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default LeadCaptureForm;
