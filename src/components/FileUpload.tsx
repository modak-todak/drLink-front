import React, { useRef, useState } from 'react';
import type { FileUploadProps } from './types';

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  name,
  accept = 'image/*,.pdf',
  maxSize = 10,
  onFileSelect,
  multiple = false,
  disabled = false,
  required = false,
  className = '',
  error,
  label,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => {
      // 파일 크기 검증
      if (file.size > maxSize * 1024 * 1024) {
        alert(`파일 크기는 ${maxSize}MB 이하여야 합니다: ${file.name}`);
        return false;
      }
      return true;
    });

    setSelectedFiles(validFiles);

    if (onFileSelect && validFiles.length > 0) {
      if (multiple) {
        validFiles.forEach((file) => onFileSelect(file));
      } else {
        onFileSelect(validFiles[0]);
      }
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!disabled) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  const getAcceptText = () => {
    if (accept.includes('image/*')) return 'PNG, JPG';
    if (accept.includes('.pdf')) return 'PNG, JPG, PDF';
    return accept.split(',').join(', ');
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        ref={fileInputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
        disabled={disabled}
        required={required}
      />

      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer
          transition-colors duration-200
          ${isDragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-gray-400'}
          ${error ? 'border-red-300' : ''}
          ${className}
        `}
      >
        <div className="flex flex-col items-center">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>

          <p className="text-sm text-gray-600">
            <span className="text-blue-600 hover:text-blue-500">Click to upload</span> or drag and drop
          </p>

          <p className="text-xs text-gray-500 mt-1">
            {getAcceptText()} up to {maxSize}MB
          </p>

          {selectedFiles.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              <p>Selected files:</p>
              <ul className="mt-1">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="text-xs">
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUpload;
