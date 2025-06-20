import React from 'react';

interface Metric {
  value: string;
  label: string;
}

interface MetricsDisplayProps {
  metrics: Metric[];
  className?: string;
}

const MetricsDisplay = ({ metrics, className = '' }: MetricsDisplayProps) => {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center reveal hover:shadow-md transition-shadow">
            <div className="text-3xl md:text-4xl font-bold text-masarna-orange mb-2">{metric.value}</div>
            <p className="text-gray-700 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsDisplay;