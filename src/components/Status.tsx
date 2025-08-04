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
      completed: 'bg-green-50 text-[#64C35B] border-[#64C35B]/20',
      'in-progress': 'bg-blue-50 text-[#2B93D2] border-[#2B93D2]/20',
      pending: 'bg-orange-50 text-orange-700 border-orange-300',
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
