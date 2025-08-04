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
        blue: 'bg-[#2B93D2] hover:bg-[#1D4ED8] text-white border-[#2B93D2]',
        success: 'bg-[#64C35B] hover:bg-[#46A64A] text-white border-[#64C35B]',
        danger: 'bg-[#DC2626] hover:bg-[#B91C1C] text-white border-[#DC2626]',
        warning: 'bg-[#F59E0B] hover:bg-[#D97706] text-white border-[#F59E0B]',
        purple: 'bg-[#695EB1] hover:bg-purple-700 text-white border-[#695EB1]',
      };
      return colorClasses[color];
    } else {
      // secondary
      const colorClasses = {
        blue: 'bg-white hover:bg-gray-50 text-blue-600 border-blue-600',
        success: 'bg-white hover:bg-gray-50 text-green-600 border-green-600',
        danger: 'bg-white hover:bg-gray-50 text-red-600 border-red-600',
        warning: 'bg-white hover:bg-gray-50 text-yellow-600 border-yellow-600',
        purple: 'bg-white hover:bg-gray-50 text-purple-600 border-purple-600',
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
