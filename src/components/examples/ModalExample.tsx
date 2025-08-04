import React, { useState } from 'react';
import { Modal, ModalWithActions, Button, TextInput, Select, type ModalAction } from '../common/index';

const ModalExample: React.FC = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  const handleSave = () => {
    console.log('Save clicked');
    setActionsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    setActionsModalOpen(false);
  };

  const actions: ModalAction[] = [
    {
      label: 'Cancel',
      onClick: handleCancel,
      variant: 'secondary',
    },
    {
      label: 'Save',
      onClick: handleSave,
      variant: 'primary',
    },
  ];

  const formActions: ModalAction[] = [
    {
      label: 'Cancel',
      onClick: () => setFormModalOpen(false),
      variant: 'secondary',
    },
    {
      label: 'Submit',
      onClick: () => {
        console.log('Form submitted');
        setFormModalOpen(false);
      },
      variant: 'primary',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Modal Components</h1>

      <div className="space-y-6">
        {/* Basic Modal */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Modal</h2>
          <Button onClick={() => setBasicModalOpen(true)}>Open Basic Modal</Button>

          <Modal isOpen={basicModalOpen} onClose={() => setBasicModalOpen(false)} title="Basic Modal">
            <p className="text-gray-600">This is a basic modal with custom content. You can put any content here.</p>
          </Modal>
        </div>

        {/* Modal with Actions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Modal with Actions</h2>
          <Button onClick={() => setActionsModalOpen(true)}>Open Modal with Actions</Button>

          <ModalWithActions
            isOpen={actionsModalOpen}
            onClose={() => setActionsModalOpen(false)}
            title="Modal Title"
            description="This is a sample modal dialog. It can contain forms, information, or any other content."
            actions={actions}
          />
        </div>

        {/* Form Modal */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Form Modal</h2>
          <Button onClick={() => setFormModalOpen(true)}>Open Form Modal</Button>

          <ModalWithActions
            isOpen={formModalOpen}
            onClose={() => setFormModalOpen(false)}
            title="Form Modal"
            description="Fill out the form below:"
            actions={formActions}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput label="Field 1" placeholder="Sample input" value="" onChange={() => {}} />
              <Select
                label="Field 2"
                placeholder="Select an option"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                value=""
                onChange={() => {}}
              />
            </div>
          </ModalWithActions>
        </div>

        {/* Large Modal */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Large Modal</h2>
          <Button onClick={() => setLargeModalOpen(true)}>Open Large Modal</Button>

          <Modal isOpen={largeModalOpen} onClose={() => setLargeModalOpen(false)} title="Large Modal" size="lg">
            <div className="space-y-4">
              <p className="text-gray-600">
                This is a large modal that can contain more content. It's useful for displaying detailed information or
                complex forms.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-900 mb-2">Sample Content</h3>
                <p className="text-sm text-gray-600">
                  You can include any type of content here, such as forms, tables, images, or any other components.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-medium text-blue-900 mb-2">Information Box</h3>
                <p className="text-sm text-blue-700">
                  This is an example of how you can use different content sections within a modal.
                </p>
              </div>
            </div>
          </Modal>
        </div>

        {/* Modal without close button */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Modal without Close Button</h2>
          <Button onClick={() => setBasicModalOpen(true)}>Open Modal (No Close Button)</Button>

          <Modal
            isOpen={basicModalOpen}
            onClose={() => setBasicModalOpen(false)}
            title="Modal without Close Button"
            showCloseButton={false}
            closeOnOverlayClick={false}
          >
            <p className="text-gray-600">
              This modal doesn't have a close button and doesn't close when clicking the overlay. You need to handle
              closing programmatically.
            </p>
            <div className="mt-4">
              <Button onClick={() => setBasicModalOpen(false)}>Close Modal</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
