// 상태 태그
import React from 'react';
import type { StatusType } from './types';

interface StatusProps {
  type: StatusType;
  className?: string;
}

const Status: React.FC<StatusProps> = ({ type, className = '' }) => {
  const getStatusClasses = () => {
    const statusClasses = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
      pending: 'bg-orange-100 text-orange-800 border-orange-200',
    };
    return statusClasses[type];
  };

  const getStatusText = () => {
    const statusTexts = {
      completed: 'Completed',
      'in-progress': 'In Progress',
      pending: 'Pending',
    };
    return statusTexts[type];
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        border ${getStatusClasses()} ${className}
      `}
    >
      {getStatusText()}
    </span>
  );
};

export default Status;
