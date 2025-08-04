export interface BaseInputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  label?: string;
}

export interface TextInputProps extends BaseInputProps {
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'tel' | 'url';
  maxLength?: number;
}

export interface EmailInputProps extends BaseInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseInputProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export interface SearchInputProps extends BaseInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export interface TextareaProps extends BaseInputProps {
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export interface CheckboxProps extends BaseInputProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface FileUploadProps extends BaseInputProps {
  accept?: string;
  maxSize?: number; // in MB
  onFileSelect?: (file: File) => void;
  multiple?: boolean;
}

export type ButtonType = 'primary' | 'secondary';
export type ButtonColor = 'blue' | 'success' | 'danger' | 'warning' | 'purple';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}
