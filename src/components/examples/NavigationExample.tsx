import React, { useState } from 'react';
import {
  Breadcrumbs,
  Tabs,
  Pagination,
  Dropdown,
  type BreadcrumbItem,
  type TabItem,
  type DropdownOption,
} from '../index';

const NavigationExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDropdown, setSelectedDropdown] = useState<string>('');

  // Breadcrumbs data
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'Components', onClick: () => console.log('Components clicked') },
    { label: 'Navigation' },
  ];

  // Tabs data
  const tabs: TabItem[] = [
    { id: 'tab1', label: 'Active Tab' },
    { id: 'tab2', label: 'Tab Two' },
    { id: 'tab3', label: 'Tab Three' },
    { id: 'tab4', label: 'Disabled Tab', disabled: true },
  ];

  // Dropdown options
  const dropdownOptions: DropdownOption[] = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' },
    { id: 'option4', label: 'Disabled Option', disabled: true },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Navigation Components</h1>

      {/* Breadcrumbs */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Breadcrumbs</h2>
        <Breadcrumbs items={breadcrumbItems} className="mb-4" />

        {/* Custom separator example */}
        <Breadcrumbs items={breadcrumbItems} separator={<span className="text-gray-400">/</span>} />
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Tab Navigation</h2>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="mb-4" />

        {/* Tab content */}
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <p className="text-gray-700">
            Active tab: <strong>{activeTab}</strong>
          </p>
        </div>
      </div>

      {/* Pagination */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pagination</h2>
        <div className="space-y-4">
          {/* Basic pagination */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Basic Pagination</h3>
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
          </div>

          {/* Pagination without prev/next */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pagination without Prev/Next</h3>
            <Pagination currentPage={5} totalPages={10} onPageChange={setCurrentPage} showPrevNext={false} />
          </div>

          {/* Pagination with more visible pages */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pagination with More Pages</h3>
            <Pagination currentPage={5} totalPages={20} onPageChange={setCurrentPage} maxVisiblePages={7} />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Dropdown Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic dropdown */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Basic Dropdown</h3>
            <Dropdown
              options={dropdownOptions}
              selectedOption={selectedDropdown}
              onOptionSelect={setSelectedDropdown}
              placeholder="Select an option"
            />
          </div>

          {/* Dropdown with custom placeholder */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Custom Placeholder</h3>
            <Dropdown
              options={dropdownOptions}
              selectedOption={selectedDropdown}
              onOptionSelect={setSelectedDropdown}
              placeholder="Choose from options"
            />
          </div>

          {/* Disabled dropdown */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Disabled Dropdown</h3>
            <Dropdown
              options={dropdownOptions}
              selectedOption={selectedDropdown}
              onOptionSelect={setSelectedDropdown}
              disabled={true}
            />
          </div>

          {/* Dropdown with pre-selected option */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Pre-selected Option</h3>
            <Dropdown options={dropdownOptions} selectedOption="option2" onOptionSelect={setSelectedDropdown} />
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Interactive Examples</h2>
        <div className="space-y-6">
          {/* Combined navigation example */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-md font-medium text-gray-700 mb-4">Combined Navigation</h3>

            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
                { label: 'Patients', onClick: () => console.log('Patients clicked') },
                { label: 'Patient List' },
              ]}
              className="mb-4"
            />

            {/* Tabs */}
            <Tabs
              tabs={[
                { id: 'overview', label: 'Overview' },
                { id: 'details', label: 'Details' },
                { id: 'history', label: 'History' },
              ]}
              activeTab="overview"
              onTabChange={(tabId) => console.log('Tab changed to:', tabId)}
              className="mb-4"
            />

            {/* Pagination */}
            <Pagination
              currentPage={3}
              totalPages={15}
              onPageChange={(page) => console.log('Page changed to:', page)}
              className="mb-4"
            />

            {/* Dropdown */}
            <div className="max-w-xs">
              <Dropdown
                options={[
                  { id: 'all', label: 'All Patients' },
                  { id: 'active', label: 'Active Patients' },
                  { id: 'inactive', label: 'Inactive Patients' },
                ]}
                selectedOption="all"
                onOptionSelect={(optionId) => console.log('Filter changed to:', optionId)}
                placeholder="Filter patients"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Custom Styling Examples</h2>
        <div className="space-y-6">
          {/* Custom styled breadcrumbs */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Custom Styled Breadcrumbs</h3>
            <Breadcrumbs
              items={breadcrumbItems}
              separator={<span className="text-blue-500 mx-2">→</span>}
              className="text-sm"
            />
          </div>

          {/* Custom styled tabs */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Custom Styled Tabs</h3>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="border-blue-200" />
          </div>

          {/* Custom styled pagination */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Custom Styled Pagination</h3>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
              className="bg-gray-50 p-2 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationExample;
