import React from 'react';
import type { CardProps } from './types';

const Card: React.FC<CardProps> = ({ children, type = 'content', variant = 'default', className = '', onClick }) => {
  const getVariantClasses = () => {
    const variantClasses = {
      default: 'bg-white',
      success: 'bg-green-50',
      warning: 'bg-amber-50',
      error: 'bg-red-50',
      info: 'bg-blue-50',
    };
    return variantClasses[variant];
  };

  const getTypeClasses = () => {
    const typeClasses = {
      stat: 'p-6',
      content: 'p-6',
      activity: 'p-4',
    };
    return typeClasses[type];
  };

  return (
    <div
      onClick={onClick}
      className={`
        rounded-lg shadow-sm border border-gray-200
        transition-all duration-200
        ${getVariantClasses()}
        ${getTypeClasses()}
        ${onClick ? 'cursor-pointer hover:shadow-md hover:border-gray-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
