import React from 'react';
import type { BreadcrumbsProps } from './types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator, className = '' }) => {
  const defaultSeparator = (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <nav className={`flex items-center space-x-2 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-gray-400" aria-hidden="true">
              {separator || defaultSeparator}
            </span>
          )}
          <div className="flex items-center">
            {index === items.length - 1 ? (
              // Last item (current page)
              <span className="text-gray-900 font-medium">{item.label}</span>
            ) : (
              // Clickable items
              <button onClick={item.onClick} className="text-gray-500 hover:text-gray-700 transition-colors">
                {item.label}
              </button>
            )}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
