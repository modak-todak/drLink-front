import React from 'react';
import type { ModalWithActionsProps } from './types';
import Modal from './Modal';

const ModalWithActions: React.FC<ModalWithActionsProps> = ({
  isOpen,
  onClose,
  title,
  description,
  actions,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      showCloseButton={showCloseButton}
      closeOnOverlayClick={closeOnOverlayClick}
      className={className}
    >
      <div className="space-y-6">
        {/* Description */}
        {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}

        {/* Custom Content */}
        {children}

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.disabled}
              className={`
                px-4 py-2 text-sm font-medium rounded-md transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed
                ${
                  action.variant === 'primary'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-gray-500'
                }
              `}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithActions;
