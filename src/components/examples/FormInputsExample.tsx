import React, { useState } from 'react';
import {
  TextInput,
  EmailInput,
  Select,
  SearchInput,
  Textarea,
  Checkbox,
  FileUpload,
  type SelectOption,
} from '../common/index';

const FormInputsExample: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const selectOptions: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSearch = (value: string) => {
    console.log('Searching for:', value);
  };

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file.name);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Form Inputs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Input */}
        <div>
          <TextInput label="Text Input" placeholder="Enter text here..." value={textValue} onChange={setTextValue} />
        </div>

        {/* Email Input */}
        <div>
          <EmailInput label="Email Input" placeholder="name@example.com" value={emailValue} onChange={setEmailValue} />
        </div>

        {/* Select Dropdown */}
        <div>
          <Select
            label="Select Dropdown"
            placeholder="Select an option..."
            options={selectOptions}
            value={selectValue}
            onChange={setSelectValue}
          />
        </div>

        {/* Search Input */}
        <div>
          <SearchInput
            label="Search Input"
            placeholder="Search here..."
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
          />
        </div>

        {/* Textarea */}
        <div className="md:col-span-2">
          <Textarea
            label="Textarea"
            placeholder="Enter detailed information here..."
            value={textareaValue}
            onChange={setTextareaValue}
            rows={4}
            maxLength={500}
            showCharacterCount={true}
          />
        </div>

        {/* Checkbox */}
        <div className="md:col-span-2">
          <Checkbox
            label="I agree to the terms and conditions"
            checked={checkboxChecked}
            onChange={setCheckboxChecked}
          />
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <FileUpload label="File Upload" accept="image/*,.pdf" maxSize={10} onFileSelect={handleFileSelect} />
        </div>
      </div>

      {/* Values Display */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Current Values:</h2>
        <pre className="text-sm text-gray-700">
          {JSON.stringify(
            {
              text: textValue,
              email: emailValue,
              select: selectValue,
              search: searchValue,
              textarea: textareaValue,
              checkbox: checkboxChecked,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default FormInputsExample;
