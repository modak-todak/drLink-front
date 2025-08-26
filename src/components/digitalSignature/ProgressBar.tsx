import React from 'react';
import { FiCheck } from 'react-icons/fi';

import type { Step } from './types';

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                ${currentStep >= step.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}
              `}
            >
              {currentStep > step.id ? <FiCheck className="w-5 h-5" /> : step.id}
            </div>
            <div className="mt-2 text-center">
              <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                {step.title}
              </div>
              <div className="text-xs text-gray-400">{step.description}</div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? 'bg-blue-500' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
