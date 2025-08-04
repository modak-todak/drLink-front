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
        blue: 'bg-[#2B93D2] hover:bg-[#1D4ED8] text-white',
        success: 'bg-[#64C35B] hover:bg-[#46A64A] text-white',
        danger: 'bg-[#DC2626] hover:bg-[#B91C1C] text-white',
        warning: 'bg-[#F59E0B] hover:bg-[#D97706] text-white',
        purple: 'bg-[#695EB1] hover:bg-purple-700 text-white',
      };
      return colorClasses[color];
    } else {
      // secondary
      const colorClasses = {
        blue: 'bg-white hover:bg-gray-50 text-[#2563EB] border border-[#2B93D2]',
        success: 'bg-white hover:bg-gray-50 text-[#64C35B] border border-[#64C35B]',
        danger: 'bg-white hover:bg-gray-50 text-[#DC2626] border border-[#DC2626]',
        warning: 'bg-white hover:bg-gray-50 text-[#F59E0B] border border-[#F59E0B]',
        purple: 'bg-white hover:bg-gray-50 text-purple-600 border border-purple-600',
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
