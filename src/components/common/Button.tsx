import React from 'react';
import type { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  color = 'blue',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  className = '',
  fullWidth = false,
}) => {
  const getTypeClasses = () => {
    if (type === 'primary') {
      const colorClasses = {
        blue: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500',
        success: 'bg-green-500 hover:bg-green-600 text-white border-green-500',
        danger: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
        warning: 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500',
        purple: 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500',
      };
      return colorClasses[color];
    } else {
      // secondary
      const colorClasses = {
        blue: 'bg-white hover:bg-gray-50 text-blue-500 border-blue-500',
        success: 'bg-white hover:bg-gray-50 text-green-500 border-green-500',
        danger: 'bg-white hover:bg-gray-50 text-red-500 border-red-500',
        warning: 'bg-white hover:bg-gray-50 text-amber-500 border-amber-500',
        purple: 'bg-white hover:bg-gray-50 text-purple-500 border-purple-500',
      };
      return colorClasses[color];
    }
  };

  const getSizeClasses = () => {
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-sm',
      large: 'px-6 py-3 text-base',
    };
    return sizeClasses[size];
  };

  const getIconSizeClasses = () => {
    const iconSizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-4 h-4',
      large: 'w-5 h-5',
    };
    return iconSizeClasses[size];
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium rounded-md
        border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getTypeClasses()}
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && <span className={`mr-2 ${getIconSizeClasses()}`}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={`ml-2 ${getIconSizeClasses()}`}>{icon}</span>}
    </button>
  );
};

export default Button;
