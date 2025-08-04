import React, { useState } from 'react';
import type { SidebarProps, SidebarCategory, SidebarItem } from './types';
import Status from './Status';

const Sidebar: React.FC<SidebarProps> = ({ categories, activeItem, onItemClick, className = '' }) => {
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set(categories.filter((cat) => cat.defaultCollapsed).map((cat) => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    setCollapsedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: SidebarItem) => {
    if (!item.disabled && onItemClick) {
      onItemClick(item.id);
    }
  };

  const renderSidebarItem = (item: SidebarItem) => {
    const isActive = activeItem === item.id;
    const isDisabled = item.disabled;

    return (
      <div
        key={item.id}
        onClick={() => handleItemClick(item)}
        className={`
          flex items-center justify-between px-4 py-3 mx-2 rounded-lg cursor-pointer
          transition-all duration-200
          ${isActive ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-gray-700 hover:bg-gray-50'}
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <div className="flex items-center space-x-3">
          {item.icon && <div className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>{item.icon}</div>}
          <span className="text-sm font-medium">{item.label}</span>
        </div>

        {item.badge && (
          <Status
            type={
              item.badge.variant === 'success'
                ? 'completed'
                : item.badge.variant === 'warning'
                ? 'pending'
                : 'in-progress'
            }
            className="text-xs"
          />
        )}
      </div>
    );
  };

  const renderCategory = (category: SidebarCategory) => {
    const isCollapsed = collapsedCategories.has(category.id);
    const hasItems = category.items.length > 0;

    return (
      <div key={category.id} className="mb-6">
        {/* Category Header */}
        <div className="flex items-center justify-between px-4 mb-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{category.title}</h3>
          {category.collapsible && hasItems && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Items */}
        {(!category.collapsible || !isCollapsed) && (
          <div className="space-y-1">{category.items.map(renderSidebarItem)}</div>
        )}
      </div>
    );
  };

  return (
    <div className={`w-64 bg-white border-r border-gray-200 h-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Dr.Link</h1>
            <p className="text-xs text-gray-500">의료협진플랫폼</p>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="flex-1 overflow-y-auto py-4">{categories.map(renderCategory)}</div>

      {/* Security Status */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-800">보안 연결</p>
              <p className="text-xs text-green-600">SSL 암호화 적용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
