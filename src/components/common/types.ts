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

export type AlertType = 'success' | 'information' | 'warning' | 'error';
export type ProgressColor = 'blue' | 'green' | 'red' | 'yellow';

export interface AlertProps {
  type: AlertType;
  title: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export interface ProgressProps {
  label: string;
  value: number;
  max?: number;
  color?: ProgressColor;
  showPercentage?: boolean;
  className?: string;
}

export interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export type CardType = 'stat' | 'content' | 'activity';
export type CardVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface CardProps {
  children: React.ReactNode;
  type?: CardType;
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

export interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

export interface ContentCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

export interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  metadata?: string;
  status?: {
    label: string;
    variant: 'success' | 'warning' | 'error' | 'info';
  };
  time?: string;
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

export interface DropdownOption {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedOption?: string;
  onOptionSelect: (optionId: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
