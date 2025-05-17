
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const formSchema = z.object({
  industry: z.string().min(1, { message: "Please select an industry" }),
  companySize: z.string().min(1, { message: "Please select company size" }),
  region: z.string().min(1, { message: "Please select a region" }),
  hasPrivacyPolicy: z.string().min(1, { message: "Please make a selection" }),
  hasSecurityMeasures: z.string().min(1, { message: "Please make a selection" }),
  hasComplianceTeam: z.string().min(1, { message: "Please make a selection" }),
  conductedAudit: z.string().min(1, { message: "Please make a selection" }),
});

type FormValues = z.infer<typeof formSchema>;

type RiskAssessment = {
  dataPrivacyRisk: string;
  dataSecurityRisk: string;
  laborComplianceRisk: string;
  financialRegulatoryRisk: string;
  industrySpecificRisk: string;
  overallRiskScore: number;
  riskLevel: string;
  priorityActions: string[];
};

export function ComplianceRiskCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState<RiskAssessment | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      companySize: "",
      region: "",
      hasPrivacyPolicy: "",
      hasSecurityMeasures: "",
      hasComplianceTeam: "",
      conductedAudit: "",
    },
  });

  const calculateRisk = (values: FormValues) => {
    const { industry, companySize, region, hasPrivacyPolicy, hasSecurityMeasures, hasComplianceTeam, conductedAudit } = values;
    
    // Calculate data privacy risk
    let dataPrivacyRiskScore = 0;
    if (industry === "healthcare" || industry === "finance" || industry === "ecommerce") dataPrivacyRiskScore += 3;
    else if (industry === "technology" || industry === "education") dataPrivacyRiskScore += 2;
    else dataPrivacyRiskScore += 1;
    
    if (region === "eu") dataPrivacyRiskScore += 3; // GDPR
    else if (region === "us-ca") dataPrivacyRiskScore += 2; // CCPA
    else dataPrivacyRiskScore += 1;
    
    if (hasPrivacyPolicy === "no") dataPrivacyRiskScore += 3;
    else if (hasPrivacyPolicy === "outdated") dataPrivacyRiskScore += 2;
    
    const dataPrivacyRisk = getRiskLevel(dataPrivacyRiskScore, 9);
    
    // Calculate data security risk
    let dataSecurityRiskScore = 0;
    if (industry === "finance" || industry === "healthcare") dataSecurityRiskScore += 3;
    else if (industry === "technology" || industry === "ecommerce") dataSecurityRiskScore += 2;
    else dataSecurityRiskScore += 1;
    
    if (hasSecurityMeasures === "no") dataSecurityRiskScore += 4;
    else if (hasSecurityMeasures === "basic") dataSecurityRiskScore += 2;
    
    const dataSecurityRisk = getRiskLevel(dataSecurityRiskScore, 7);
    
    // Calculate labor compliance risk
    let laborComplianceRiskScore = 0;
    if (companySize === "large") laborComplianceRiskScore += 3;
    else if (companySize === "medium") laborComplianceRiskScore += 2;
    else laborComplianceRiskScore += 1;
    
    if (conductedAudit === "no") laborComplianceRiskScore += 2;
    else if (conductedAudit === "over-year") laborComplianceRiskScore += 1;
    
    const laborComplianceRisk = getRiskLevel(laborComplianceRiskScore, 5);
    
    // Calculate financial regulatory risk
    let financialRegulatoryRiskScore = 0;
    if (industry === "finance") financialRegulatoryRiskScore += 4;
    else if (industry === "healthcare" || industry === "insurance") financialRegulatoryRiskScore += 3;
    else financialRegulatoryRiskScore += 1;
    
    if (hasComplianceTeam === "no") financialRegulatoryRiskScore += 3;
    else if (hasComplianceTeam === "partial") financialRegulatoryRiskScore += 1;
    
    const financialRegulatoryRisk = getRiskLevel(financialRegulatoryRiskScore, 7);
    
    // Calculate industry specific risk
    let industrySpecificRiskScore = 0;
    if (industry === "healthcare") industrySpecificRiskScore += 4; // HIPAA
    else if (industry === "finance") industrySpecificRiskScore += 4; // Financial regulations
    else if (industry === "ecommerce") industrySpecificRiskScore += 2;
    else if (industry === "manufacturing") industrySpecificRiskScore += 3;
    else industrySpecificRiskScore += 1;
    
    if (conductedAudit === "no") industrySpecificRiskScore += 2;
    
    const industrySpecificRisk = getRiskLevel(industrySpecificRiskScore, 6);
    
    // Calculate overall risk
    const overallRiskScore = 
      dataPrivacyRiskScore + 
      dataSecurityRiskScore + 
      laborComplianceRiskScore + 
      financialRegulatoryRiskScore + 
      industrySpecificRiskScore;
    
    const maxPossibleScore = 34; // Sum of max scores for all categories
    const riskPercentage = (overallRiskScore / maxPossibleScore) * 100;
    
    let riskLevel = "Low";
    if (riskPercentage > 70) riskLevel = "High";
    else if (riskPercentage > 40) riskLevel = "Medium";
    
    // Determine priority actions based on highest risks
    const priorityActions: string[] = [];
    
    if (dataPrivacyRisk === "High") {
      priorityActions.push("Develop or update privacy policies and procedures");
      if (region === "eu") priorityActions.push("Conduct a GDPR compliance assessment");
      else if (region === "us-ca") priorityActions.push("Review CCPA compliance requirements");
    }
    
    if (dataSecurityRisk === "High") {
      priorityActions.push("Implement enhanced data security measures");
      priorityActions.push("Conduct a security risk assessment");
    }
    
    if (financialRegulatoryRisk === "High" && industry === "finance") {
      priorityActions.push("Review financial regulatory compliance framework");
    }
    
    if (hasComplianceTeam === "no") {
      priorityActions.push("Establish a compliance function or designated compliance officer");
    }
    
    if (conductedAudit === "no") {
      priorityActions.push("Schedule a comprehensive compliance audit");
    }
    
    // Limit to the top 3 actions
    const topPriorityActions = priorityActions.slice(0, 3);
    
    setResult({
      dataPrivacyRisk,
      dataSecurityRisk,
      laborComplianceRisk,
      financialRegulatoryRisk,
      industrySpecificRisk,
      overallRiskScore: Math.round(riskPercentage),
      riskLevel,
      priorityActions: topPriorityActions,
    });
  };
  
  const getRiskLevel = (score: number, maxScore: number): string => {
    const percentage = (score / maxScore) * 100;
    if (percentage > 70) return "High";
    if (percentage > 40) return "Medium";
    return "Low";
  };

  const onSubmit = (values: FormValues) => {
    calculateRisk(values);
  };

  const resetCalculator = () => {
    form.reset();
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-masarna-orange/10">
              <Shield className="h-5 w-5 text-masarna-orange" />
            </div>
            <DialogTitle>Compliance Risk Assessment Tool</DialogTitle>
          </div>
          <DialogDescription>
            Evaluate your regulatory risk exposure based on your business model and location.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="">Select an industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="education">Education</option>
                        <option value="insurance">Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Size</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="">Select company size</option>
                        <option value="small">Small (&lt; 50 employees)</option>
                        <option value="medium">Medium (50-250 employees)</option>
                        <option value="large">Large (&gt; 250 employees)</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Region of Operation</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="">Select region</option>
                        <option value="us">United States (general)</option>
                        <option value="us-ca">United States (California)</option>
                        <option value="eu">European Union</option>
                        <option value="uk">United Kingdom</option>
                        <option value="apac">Asia-Pacific</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hasPrivacyPolicy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have an up-to-date privacy policy?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="privacy-yes" />
                          <label htmlFor="privacy-yes">Yes, recently updated</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="outdated" id="privacy-outdated" />
                          <label htmlFor="privacy-outdated">Yes, but outdated</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="privacy-no" />
                          <label htmlFor="privacy-no">No</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="hasSecurityMeasures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Measures</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="comprehensive" id="security-comprehensive" />
                          <label htmlFor="security-comprehensive">Comprehensive</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="basic" id="security-basic" />
                          <label htmlFor="security-basic">Basic</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="security-no" />
                          <label htmlFor="security-no">Minimal/None</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hasComplianceTeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compliance Team</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dedicated" id="compliance-dedicated" />
                          <label htmlFor="compliance-dedicated">Dedicated</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partial" id="compliance-partial" />
                          <label htmlFor="compliance-partial">Partial/Shared</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="compliance-no" />
                          <label htmlFor="compliance-no">None</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="conductedAudit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compliance Audit</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="recent" id="audit-recent" />
                          <label htmlFor="audit-recent">Within last year</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="over-year" id="audit-over-year" />
                          <label htmlFor="audit-over-year">Over a year ago</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="audit-no" />
                          <label htmlFor="audit-no">Never</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-masarna-orange hover:bg-masarna-orange/90">
                Assess Risk
              </Button>
              <Button type="button" onClick={resetCalculator} variant="outline" className="flex-1">
                Reset
              </Button>
            </div>
          </form>
        </Form>
        
        {result && (
          <div className="mt-6 p-4 bg-masarna-orange/10 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-masarna-orange">Risk Assessment Results</h3>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <p className="text-lg font-medium">Overall Risk Level:</p>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-white font-medium ${
                    result.riskLevel === "High" ? "bg-red-500" : 
                    result.riskLevel === "Medium" ? "bg-yellow-500" : "bg-green-500"
                  }`}>
                    {result.riskLevel} ({result.overallRiskScore}%)
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="flex justify-between items-center p-3 bg-white rounded border border-masarna-orange/20">
                <span className="text-sm font-medium">Data Privacy Risk:</span>
                <span className={`px-2 py-0.5 text-xs rounded-full text-white font-medium ${
                  result.dataPrivacyRisk === "High" ? "bg-red-500" : 
                  result.dataPrivacyRisk === "Medium" ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {result.dataPrivacyRisk}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border border-masarna-orange/20">
                <span className="text-sm font-medium">Data Security Risk:</span>
                <span className={`px-2 py-0.5 text-xs rounded-full text-white font-medium ${
                  result.dataSecurityRisk === "High" ? "bg-red-500" : 
                  result.dataSecurityRisk === "Medium" ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {result.dataSecurityRisk}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border border-masarna-orange/20">
                <span className="text-sm font-medium">Labor Compliance Risk:</span>
                <span className={`px-2 py-0.5 text-xs rounded-full text-white font-medium ${
                  result.laborComplianceRisk === "High" ? "bg-red-500" : 
                  result.laborComplianceRisk === "Medium" ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {result.laborComplianceRisk}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border border-masarna-orange/20">
                <span className="text-sm font-medium">Financial Regulatory Risk:</span>
                <span className={`px-2 py-0.5 text-xs rounded-full text-white font-medium ${
                  result.financialRegulatoryRisk === "High" ? "bg-red-500" : 
                  result.financialRegulatoryRisk === "Medium" ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {result.financialRegulatoryRisk}
                </span>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-white rounded border border-masarna-orange/20">
              <p className="font-medium mb-2">Priority Actions:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {result.priorityActions.length > 0 ? (
                  result.priorityActions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))
                ) : (
                  <li>Continue with your existing compliance practices</li>
                )}
              </ol>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic">
                  Note: This is a simplified assessment for educational purposes. We recommend consulting with compliance experts for a comprehensive evaluation.
                </p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
