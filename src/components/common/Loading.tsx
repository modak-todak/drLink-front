import React from 'react';

interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = 'Loading...', size = 'md', className = '' }) => {
  const getSizeClasses = () => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    return sizeClasses[size];
  };

  const getDotSizeClasses = () => {
    const dotSizeClasses = {
      sm: 'w-1 h-1',
      md: 'w-1.5 h-1.5',
      lg: 'w-2 h-2',
    };
    return dotSizeClasses[size];
  };

  return (
    <div className={`flex items-center space-x-1 ${getSizeClasses()} ${className}`}>
      <span className="text-gray-700">{text}</span>
      <div className="flex space-x-1">
        <div
          className={`bg-blue-600 rounded-full animate-pulse ${getDotSizeClasses()}`}
          style={{ animationDelay: '0ms' }}
        />
        <div
          className={`bg-blue-600 rounded-full animate-pulse ${getDotSizeClasses()}`}
          style={{ animationDelay: '150ms' }}
        />
        <div
          className={`bg-blue-600 rounded-full animate-pulse ${getDotSizeClasses()}`}
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
};

export default Loading;
