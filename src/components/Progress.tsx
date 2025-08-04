import React from 'react';
import type { ProgressColor } from './types';

interface ProgressProps {
  label: string;
  value: number;
  max?: number;
  color?: ProgressColor;
  showPercentage?: boolean;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({
  label,
  value,
  max = 100,
  color = 'blue',
  showPercentage = true,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const getColorClasses = () => {
    const colorClasses = {
      blue: 'bg-primary-blue',
      green: 'bg-primary-green',
      red: 'bg-primary-red',
      yellow: 'bg-yellow-600',
    };
    return colorClasses[color];
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ease-out ${getColorClasses()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
