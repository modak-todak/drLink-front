import React from 'react';
import type { StatCardProps } from './types';
import Card from './Card';

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  change,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const getIconColorClasses = () => {
    const colorClasses = {
      default: 'bg-gray-100 text-gray-600',
      success: 'bg-green-100 text-green-600',
      warning: 'bg-amber-100 text-amber-600',
      error: 'bg-red-100 text-red-600',
      info: 'bg-blue-100 text-blue-600',
    };
    return colorClasses[variant];
  };

  return (
    <Card type="stat" variant={variant} className={className} onClick={onClick}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColorClasses()}`}>
            <div className="w-6 h-6">{icon}</div>
          </div>

          {/* Content */}
          <div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        </div>

        {/* Change indicator */}
        {change && (
          <div className="flex items-center space-x-1">
            <svg
              className={`w-4 h-4 ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={change.isPositive ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'}
              />
            </svg>
            <span className={`text-sm font-medium ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change.value}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
