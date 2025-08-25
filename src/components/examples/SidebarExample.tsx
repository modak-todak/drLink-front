import React, { useState } from 'react';
import { Sidebar } from '../common';
import type { SidebarCategory } from '../common/types';

const SidebarExample: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  // 아이콘들
  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const BuildingIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  );

  const DocumentIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const VideoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

  const PenIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );

  const HistoryIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  // 사이드바 카테고리 데이터
  const sidebarCategories: SidebarCategory[] = [
    {
      id: 'main',
      title: '메인',
      items: [
        {
          id: 'dashboard',
          label: '대시보드',
          icon: <ClockIcon />,
          onClick: () => console.log('Dashboard clicked'),
        },
        {
          id: 'find-hospital',
          label: '전문병원 찾기',
          icon: <BuildingIcon />,
          onClick: () => console.log('Find Hospital clicked'),
        },
      ],
    },
    {
      id: 'collaboration',
      title: '협진 관리',
      items: [
        {
          id: 'collaboration-request',
          label: '협진 요청',
          icon: <UsersIcon />,
          onClick: () => console.log('Collaboration Request clicked'),
        },
        {
          id: 'collaboration-records',
          label: '협진 기록',
          icon: <DocumentIcon />,
          onClick: () => console.log('Collaboration Records clicked'),
        },
        {
          id: 'real-time-collaboration',
          label: '실시간 협진',
          icon: <VideoIcon />,
          onClick: () => console.log('Real-time Collaboration clicked'),
        },
        {
          id: 'write-opinion',
          label: '소견서 작성',
          icon: <PenIcon />,
          onClick: () => console.log('Write Opinion clicked'),
        },
      ],
    },
    {
      id: 'records',
      title: '기록 관리',
      items: [
        {
          id: 'collaboration-history',
          label: '협진 이력',
          icon: <HistoryIcon />,
          onClick: () => console.log('Collaboration History clicked'),
        },
      ],
    },
    {
      id: 'settings',
      title: '설정',
      items: [
        {
          id: 'hospital-info',
          label: '병원 정보 관리',
          icon: <BuildingIcon />,
          onClick: () => console.log('Hospital Info clicked'),
        },
        {
          id: 'access-log',
          label: '접근 로그',
          icon: <ShieldIcon />,
          onClick: () => console.log('Access Log clicked'),
        },
      ],
    },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    console.log('Active item changed to:', itemId);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar categories={sidebarCategories} activeItem={activeItem} onItemClick={handleItemClick} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Sidebar Component</h1>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Active Item</h2>
            <p className="text-gray-600">
              Currently selected: <strong>{activeItem}</strong>
            </p>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Responsive sidebar with collapsible categories</li>
              <li>• Active item highlighting with blue theme</li>
              <li>• Icon support for each menu item</li>
              <li>• Security status indicator at bottom</li>
              <li>• Hover effects and smooth transitions</li>
              <li>• Korean language support</li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Usage</h2>
            <pre className="bg-gray-50 p-4 rounded-md text-sm overflow-x-auto">
              {`import { Sidebar } from '@/components/common';

const categories = [
  {
    id: 'main',
    title: '메인',
    items: [
      {
        id: 'dashboard',
        label: '대시보드',
        icon: <ClockIcon />,
        onClick: () => console.log('Dashboard clicked'),
      },
    ],
  },
];

<Sidebar
  categories={categories}
  activeItem="dashboard"
  onItemClick={(itemId) => setActiveItem(itemId)}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarExample;
