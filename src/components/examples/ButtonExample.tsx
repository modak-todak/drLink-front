import React from 'react';
import { Button, IconButton } from '../index';

const ButtonExample: React.FC = () => {
  const handleClick = (message: string) => {
    console.log(message);
  };

  // 아이콘들
  const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );

  const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const HexagonIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Button Components</h1>

      {/* Primary Buttons */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button onClick={() => handleClick('Primary Button clicked')}>Primary Button</Button>
          <Button icon={<PlusIcon />} onClick={() => handleClick('Primary with icon clicked')}>
            + With Icon
          </Button>
          <Button disabled onClick={() => handleClick('Disabled button clicked')}>
            Disabled
          </Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button type="secondary" onClick={() => handleClick('Secondary Button clicked')}>
            Secondary Button
          </Button>
          <Button type="secondary" color="blue" onClick={() => handleClick('Blue Secondary clicked')}>
            Blue Secondary
          </Button>
        </div>
      </div>

      {/* Color Variants */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Color Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button color="success" onClick={() => handleClick('Success button clicked')}>
            Success
          </Button>
          <Button color="danger" onClick={() => handleClick('Danger button clicked')}>
            Danger
          </Button>
          <Button color="warning" onClick={() => handleClick('Warning button clicked')}>
            Warning
          </Button>
          <Button color="purple" onClick={() => handleClick('Purple button clicked')}>
            Purple
          </Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Icon Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton
            icon={<SearchIcon />}
            color="blue"
            onClick={() => handleClick('Search icon button clicked')}
            title="Search"
          />
          <IconButton
            icon={<DownloadIcon />}
            color="success"
            onClick={() => handleClick('Download icon button clicked')}
            title="Download"
          />
          <IconButton
            icon={<HexagonIcon />}
            color="blue"
            type="secondary"
            onClick={() => handleClick('Hexagon icon button clicked')}
            title="Settings"
          />
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="small" onClick={() => handleClick('Small button clicked')}>
            Small
          </Button>
          <Button size="medium" onClick={() => handleClick('Medium button clicked')}>
            Medium
          </Button>
          <Button size="large" onClick={() => handleClick('Large button clicked')}>
            Large
          </Button>
        </div>
      </div>

      {/* Icon Button Sizes */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Icon Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton
            icon={<SearchIcon />}
            size="small"
            onClick={() => handleClick('Small icon button clicked')}
            title="Small Search"
          />
          <IconButton
            icon={<SearchIcon />}
            size="medium"
            onClick={() => handleClick('Medium icon button clicked')}
            title="Medium Search"
          />
          <IconButton
            icon={<SearchIcon />}
            size="large"
            onClick={() => handleClick('Large icon button clicked')}
            title="Large Search"
          />
        </div>
      </div>

      {/* Full Width Buttons */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Full Width Buttons</h2>
        <div className="space-y-4">
          <Button fullWidth onClick={() => handleClick('Full width primary clicked')}>
            Full Width Primary Button
          </Button>
          <Button type="secondary" fullWidth onClick={() => handleClick('Full width secondary clicked')}>
            Full Width Secondary Button
          </Button>
        </div>
      </div>

      {/* Mixed Examples */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Mixed Examples</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            type="secondary"
            color="success"
            icon={<PlusIcon />}
            iconPosition="right"
            onClick={() => handleClick('Mixed button clicked')}
          >
            Add Item
          </Button>
          <Button
            color="danger"
            size="small"
            icon={<DownloadIcon />}
            onClick={() => handleClick('Small danger button clicked')}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
