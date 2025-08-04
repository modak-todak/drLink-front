import React, { useState } from 'react';
import { Status, Alert, Progress, Loading } from '../common/index';

const FeedbackExample: React.FC = () => {
  const [alerts, setAlerts] = useState({
    success: true,
    information: true,
    warning: true,
    error: true,
  });

  const removeAlert = (type: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Feedback Components</h1>

      {/* Status Badges */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Status Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Status type="completed" />
          <Status type="in-progress" />
          <Status type="pending" />
        </div>
      </div>

      {/* Alert Messages */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Alert Messages</h2>
        <div className="space-y-4">
          {alerts.success && (
            <Alert
              type="success"
              title="Success"
              message="Your request has been processed successfully."
              onClose={() => removeAlert('success')}
            />
          )}
          {alerts.information && (
            <Alert
              type="information"
              title="Information"
              message="Please check your email for further instructions."
              onClose={() => removeAlert('information')}
            />
          )}
          {alerts.warning && (
            <Alert
              type="warning"
              title="Warning"
              message="This action cannot be undone. Please proceed with caution."
              onClose={() => removeAlert('warning')}
            />
          )}
          {alerts.error && (
            <Alert
              type="error"
              title="Error"
              message="An error occurred while processing your request. Please try again."
              onClose={() => removeAlert('error')}
            />
          )}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Progress Indicators</h2>
        <div className="space-y-6">
          <Progress label="Progress" value={65} color="blue" showPercentage={true} />
          <Progress label="Upload Status" value={80} color="green" showPercentage={true} />
          <Progress label="Download Progress" value={45} color="yellow" showPercentage={true} />
          <Progress label="Error Progress" value={20} color="red" showPercentage={true} />
        </div>
      </div>

      {/* Loading Indicators */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Loading Indicators</h2>
        <div className="space-y-4">
          <Loading text="Loading..." size="md" />
          <Loading text="Processing..." size="md" />
          <Loading text="Small loading" size="sm" />
          <Loading text="Large loading" size="lg" />
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Interactive Examples</h2>
        <div className="space-y-6">
          {/* Progress with different values */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">Progress Examples</h3>
            <div className="space-y-4">
              <Progress label="Task 1" value={25} color="blue" />
              <Progress label="Task 2" value={50} color="green" />
              <Progress label="Task 3" value={75} color="yellow" />
              <Progress label="Task 4" value={100} color="red" />
            </div>
          </div>

          {/* Status badges in different contexts */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">Status Examples</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Order:</span>
                <Status type="completed" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Payment:</span>
                <Status type="in-progress" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Shipping:</span>
                <Status type="pending" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Custom Styling Examples</h2>
        <div className="space-y-4">
          <Alert
            type="success"
            title="Custom Success"
            message="This alert has custom styling applied."
            className="border-2 border-green-300"
          />
          <Progress label="Custom Progress" value={60} color="blue" className="max-w-md" />
          <Loading text="Custom Loading" size="lg" className="text-blue-600 font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackExample;
