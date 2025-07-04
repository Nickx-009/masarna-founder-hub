import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { BarChart, DollarSign, Percent, Shield, Settings, Users } from 'lucide-react';
import { StartupRunwayCalculator } from '@/components/calculators/StartupRunwayCalculator';
import { EquityDilutionCalculator } from '@/components/calculators/EquityDilutionCalculator';
import { HiringCostCalculator } from '@/components/calculators/HiringCostCalculator';
import { SaaSUnitEconomicsCalculator } from '@/components/calculators/SaaSUnitEconomicsCalculator';
import { OperationsEfficiencyCalculator } from '@/components/calculators/OperationsEfficiencyCalculator';
import { ComplianceRiskCalculator } from '@/components/calculators/ComplianceRiskCalculator';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Startup Financial & Operational Calculators",
      description: "Make data-driven decisions with our specialized calculators designed for startups. Estimate runway, equity dilution, hiring costs, and more.",
      keywords: "startup calculators, financial tools, runway calculator, equity dilution, hiring cost, SaaS unit economics, operations efficiency, compliance risk assessment"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface CalculatorsProps {
  title: string;
  description: string;
  keywords: string;
}

const Calculators = ({ title, description, keywords }: CalculatorsProps) => {
  // State for each calculator dialog
  const [openRunway, setOpenRunway] = useState(false);
  const [openEquity, setOpenEquity] = useState(false);
  const [openHiring, setOpenHiring] = useState(false);
  const [openSaas, setOpenSaas] = useState(false);
  const [openOperations, setOpenOperations] = useState(false);
  const [openCompliance, setOpenCompliance] = useState(false);
  
  const calculatorList = [
    {
      title: "Startup Runway Calculator",
      description: "Determine how long your current funding will last based on your burn rate and revenue projections.",
      category: "Finance",
      complexity: "Basic",
      icon: DollarSign,
      openState: openRunway,
      setOpenState: setOpenRunway,
      component: StartupRunwayCalculator,
    },
    {
      title: "Equity Dilution Calculator",
      description: "Understand the impact of funding rounds on founder and employee equity ownership.",
      category: "Finance",
      complexity: "Advanced",
      icon: Percent,
      openState: openEquity,
      setOpenState: setOpenEquity,
      component: EquityDilutionCalculator,
    },
    {
      title: "Hiring Cost Calculator",
      description: "Calculate the true cost of hiring new employees, including recruitment, onboarding, and benefits.",
      category: "HR",
      complexity: "Intermediate",
      icon: Users,
      openState: openHiring,
      setOpenState: setOpenHiring,
      component: HiringCostCalculator,
    },
    {
      title: "SaaS Unit Economics Calculator",
      description: "Calculate CAC, LTV, and other critical SaaS metrics to evaluate your business model.",
      category: "Growth",
      complexity: "Advanced",
      icon: BarChart,
      openState: openSaas,
      setOpenState: setOpenSaas,
      component: SaaSUnitEconomicsCalculator,
    },
    {
      title: "Operations Efficiency Estimator",
      description: "Estimate potential time and cost savings from streamlining your operational processes.",
      category: "Operations",
      complexity: "Intermediate",
      icon: Settings,
      openState: openOperations,
      setOpenState: setOpenOperations,
      component: OperationsEfficiencyCalculator,
    },
    {
      title: "Compliance Risk Assessment Tool",
      description: "Evaluate your exposure to regulatory risks based on your business model and location.",
      category: "Legal",
      complexity: "Advanced",
      icon: Shield,
      openState: openCompliance,
      setOpenState: setOpenCompliance,
      component: ComplianceRiskCalculator,
    },
  ];

  return (
    <>
      <Head>
        <title>{title} | Masarna</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masarna.co/resources/calculators" />
        <meta property="og:image" content="https://masarna.co/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
        <link rel="canonical" href="https://masarna.co/resources/calculators" />
      </Head>
      
      <PageLayout 
        title={title} 
        description={description}
        keywords={keywords}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Calculators</h1>
            <p className="text-lg text-gray-700 mb-12">
              Make more informed decisions with our specialized calculators designed to provide actionable insights for startup founders and operators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {calculatorList.map((calculator, index) => {
                const Icon = calculator.icon;
                const CalculatorComponent = calculator.component;
                
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-masarna-orange/10 text-masarna-orange rounded-full">{calculator.category}</span>
                      <span className="text-xs text-gray-500 ml-3">{calculator.complexity}</span>
                    </div>
                    <div className="flex items-start mb-2">
                      <div className="mr-3 p-2 bg-masarna-orange/10 rounded-full">
                        <Icon className="h-5 w-5 text-masarna-orange" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{calculator.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 ml-10">{calculator.description}</p>
                    <Button 
                      variant="outline" 
                      className="ml-10 text-masarna-orange border-masarna-orange"
                      onClick={() => calculator.setOpenState(true)}
                    >
                      Use Calculator
                    </Button>
                    
                    <CalculatorComponent 
                      open={calculator.openState}
                      onOpenChange={calculator.setOpenState}
                    />
                  </div>
                );
              })}
            </div>
            
            <div className="bg-masarna-orange/10 p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a custom calculation?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Our financial and operational experts can help you build custom models and calculations tailored to your specific business needs.
              </p>
              <Button 
                className="bg-masarna-orange hover:bg-masarna-orange/90 text-white"
                onClick={() => window.location.href = '/contact'}
              >
                Request Custom Analysis
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Calculators;