import React from 'react';
import Dropdown from './Dropdown';
import type { DropdownOption } from './types';
interface LabeledDropdownProps {
  label: string;
  options: DropdownOption[];
  selectedOption: string;
  onOptionSelect: (optionId: string) => void;
  placeholder?: string;
  className?: string;
}

const LabeledDropdown: React.FC<LabeledDropdownProps> = ({
  label,
  options,
  selectedOption,
  onOptionSelect,
  placeholder,
  className = '',
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={onOptionSelect}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabeledDropdown;
