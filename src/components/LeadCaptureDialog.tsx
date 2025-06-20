import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import LeadCaptureForm, { LeadFormData } from './LeadCaptureForm';
import { saveSecureLead, trackSecureCTAClick } from '@/utils/secureLeadUtils';

export interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source: string;
  ctaText?: string;
  ctaContext?: string;
}

const LeadCaptureDialog = ({ 
  open, 
  onOpenChange, 
  source,
  ctaText = "Request Information",
  ctaContext = "general" 
}: LeadCaptureDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    
    try {
      // Track CTA click securely
      trackSecureCTAClick(ctaText, source, ctaContext);
      
      // Create lead object with metadata
      const leadData = {
        ...data,
        source,
        ctaText,
        ctaContext
      };
      
      // Save lead securely
      const success = saveSecureLead(leadData);
      
      if (success) {
        console.log('Lead captured securely');
        
        // Show success message
        toast({
          title: "Thank you for your interest!",
          description: "One of our consultants will contact you shortly.",
        });
        
        // Close the dialog
        onOpenChange(false);
      } else {
        toast({
          title: "Unable to submit",
          description: "Please check your information and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Map source to default interest area if possible
  const getDefaultInterest = () => {
    let interest = "";
    
    if (source.includes("/services/")) {
      interest = source.split("/services/")[1];
    } else if (source.includes("/solutions/")) {
      interest = source.split("/solutions/")[1];
    }
    
    if ([
      "operations", 
      "human-resources", 
      "finance", 
      "compliance", 
      "strategy", 
      "growth"
    ].includes(interest)) {
      return interest;
    }
    
    return ctaContext;
  };
  
  const getDialogTitle = () => {
    if (ctaText.toLowerCase().includes("assessment")) {
      return "Book Your Free Assessment";
    }
    if (ctaText.toLowerCase().includes("consult")) {
      return "Schedule a Consultation";
    }
    return "Get in Touch";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-masarna-orange">
            {getDialogTitle()}
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you within one business day.
          </DialogDescription>
        </DialogHeader>
        
        <LeadCaptureForm 
          onSubmit={handleSubmit} 
          defaultInterest={getDefaultInterest()} 
          isSubmitting={isSubmitting}
        />
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="text-masarna-orange hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;