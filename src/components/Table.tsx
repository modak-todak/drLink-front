import React from 'react';
import type { TableProps, TableData } from './types';
import Status from './Status';

const Table: React.FC<TableProps> = ({
  variant = 'basic',
  columns,
  data,
  className = '',
  onRowClick,
  onActionClick,
}) => {
  const handleRowClick = (row: TableData) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  const handleActionClick = (action: string, row: TableData, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onActionClick) {
      onActionClick(action, row);
    }
  };

  const renderCell = (column: any, row: TableData) => {
    const value = row[column.key];

    // Status 타입 처리
    if (column.key === 'status' && typeof value === 'string') {
      return <Status type={value as any} />;
    }

    // Actions 타입 처리
    if (column.key === 'actions') {
      return (
        <div className="flex gap-2">
          <button
            onClick={(e) => handleActionClick('view', row, e)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View
          </button>
          <button
            onClick={(e) => handleActionClick('edit', row, e)}
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            Edit
          </button>
        </div>
      );
    }

    return <span className="text-gray-900">{value}</span>;
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-lg shadow-sm ${className}`}>
        <div className="divide-y divide-gray-200">
          {data.map((row) => (
            <div
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="font-medium text-gray-900">{row.patientCode}</div>
                    <div className="text-sm text-gray-500">{row.department}</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center space-x-3">
                  {row.status && <Status type={row.status} />}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleActionClick('view', row, e)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View
                    </button>
                    <button
                      onClick={(e) => handleActionClick('edit', row, e)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Basic Table
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`
                  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                  ${column.width ? `w-${column.width}` : ''}
                  ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                `}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`
                    px-6 py-4 whitespace-nowrap text-sm
                    ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                  `}
                >
                  {renderCell(column, row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
