import React from 'react';
import type { ContentCardProps } from './types';
import Card from './Card';

const ContentCard: React.FC<ContentCardProps> = ({
  icon,
  title,
  description,
  action,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const getIconColorClasses = () => {
    const colorClasses = {
      default: 'text-blue-500',
      success: 'text-green-500',
      warning: 'text-amber-500',
      error: 'text-red-500',
      info: 'text-blue-500',
    };
    return colorClasses[variant];
  };

  return (
    <Card type="content" variant={variant} className={className} onClick={onClick}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className={`w-8 h-8 flex items-center justify-center ${getIconColorClasses()}`}>
                <div className="w-5 h-5">{icon}</div>
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Action */}
        {action && (
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                action.onClick();
              }}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              {action.label}
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ContentCard;
