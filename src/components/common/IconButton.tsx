import React from 'react';
import type { ButtonColor, ButtonSize } from './types';

interface IconButtonProps {
  icon: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = 'blue',
  size = 'medium',
  type = 'primary',
  disabled = false,
  onClick,
  className = '',
  title,
}) => {
  const getColorClasses = () => {
    if (type === 'primary') {
      const colorClasses = {
        blue: 'bg-blue-500 hover:bg-blue-600 text-white',
        success: 'bg-green-500 hover:bg-green-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        warning: 'bg-amber-500 hover:bg-amber-600 text-white',
        purple: 'bg-purple-500 hover:bg-purple-600 text-white',
      };
      return colorClasses[color];
    } else {
      // secondary
      const colorClasses = {
        blue: 'bg-white hover:bg-gray-50 text-blue-500 border border-blue-500',
        success: 'bg-white hover:bg-gray-50 text-green-500 border border-green-500',
        danger: 'bg-white hover:bg-gray-50 text-red-500 border border-red-500',
        warning: 'bg-white hover:bg-gray-50 text-amber-500 border border-amber-500',
        purple: 'bg-white hover:bg-gray-50 text-purple-500 border border-purple-500',
      };
      return colorClasses[color];
    }
  };

  const getSizeClasses = () => {
    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-10 h-10',
      large: 'w-12 h-12',
    };
    return sizeClasses[size];
  };

  const getIconSizeClasses = () => {
    const iconSizeClasses = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
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
      title={title}
      className={`
        inline-flex items-center justify-center rounded-md
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getColorClasses()}
        ${getSizeClasses()}
        ${className}
      `}
    >
      <span className={getIconSizeClasses()}>{icon}</span>
    </button>
  );
};

export default IconButton;
