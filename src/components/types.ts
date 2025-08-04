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

export type TableVariant = 'basic' | 'compact';
export type StatusType = 'completed' | 'in-progress' | 'pending';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableData {
  [key: string]: any;
  id: string;
}

export interface TableProps {
  variant?: TableVariant;
  columns: TableColumn[];
  data: TableData[];
  className?: string;
  onRowClick?: (row: TableData) => void;
  onActionClick?: (action: string, row: TableData) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

export interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface ModalWithActionsProps extends Omit<ModalProps, 'children'> {
  description?: string;
  actions: ModalAction[];
  children?: React.ReactNode;
}
