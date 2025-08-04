import React from 'react';
import type { TextareaProps } from './types';

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder = 'Enter detailed information here...',
  value = '',
  onChange,
  rows = 4,
  disabled = false,
  required = false,
  className = '',
  error,
  label,
  maxLength,
  showCharacterCount = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const characterCount = value.length;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm resize-none
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-300' : 'border-gray-300'}
            ${showCharacterCount && maxLength ? 'pb-8' : ''}
            ${className}
          `}
        />
        {showCharacterCount && maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {characterCount}/{maxLength} characters
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Textarea;
