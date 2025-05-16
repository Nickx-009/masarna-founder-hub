
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

interface Feature {
  title?: string;
  description: string;
}

interface ServiceFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: Feature[];
  className?: string;
}

const ServiceFeatureCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  className = '' 
}: ServiceFeatureCardProps) => {
  return (
    <Card className={`border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full reveal ${className}`}>
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4 p-3 rounded-full bg-masarna-orange/10">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-masarna-orange">
          {title}
        </CardTitle>
      </CardHeader>
      <Separator className="mx-8 bg-gray-100" />
      <CardContent className="pt-4 px-8">
        <p className="text-gray-700 mb-6 text-center">
          {description}
        </p>
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-5 h-5 bg-masarna-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                <CheckCircle className="h-3 w-3 text-masarna-orange" />
              </span>
              <span className="text-gray-800 text-sm leading-tight">
                {feature.title && <span className="font-medium">{feature.title}:</span>}{' '}
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceFeatureCard;
