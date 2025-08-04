import React from 'react';
import type { ActivityCardProps } from './types';
import Card from './Card';
import Status from './Status';

const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  subtitle,
  metadata,
  status,
  time,
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

  const getStatusType = (): 'completed' | 'in-progress' | 'pending' => {
    if (!status) return 'pending';
    const statusMap: Record<string, 'completed' | 'in-progress' | 'pending'> = {
      success: 'completed',
      warning: 'pending',
      error: 'pending',
      info: 'in-progress',
    };
    return statusMap[status.variant] || 'pending';
  };

  return (
    <Card type="activity" variant={variant} className={className} onClick={onClick}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          {/* Icon */}
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconColorClasses()}`}>
            <div className="w-5 h-5">{icon}</div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{title}</h3>
            {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
            {metadata && (
              <div className="flex items-center space-x-1 mt-1">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-xs text-gray-500">{metadata}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Status and Time */}
        <div className="flex flex-col items-end space-y-2">
          {status && <Status type={getStatusType()} />}
          {time && <span className="text-xs text-gray-500">{time}</span>}
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
