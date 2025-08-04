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
      completed: 'bg-green-50 text-green-500 border-green-500/20',
      'in-progress': 'bg-blue-50 text-blue-500 border-blue-500/20',
      pending: 'bg-amber-50 text-amber-500 border-amber-500/20',
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
