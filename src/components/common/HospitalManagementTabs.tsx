import React from 'react';
import { FiUsers, FiCalendar, FiSettings } from 'react-icons/fi';
import { PiHospitalFill } from 'react-icons/pi';

export interface HospitalManagementTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface HospitalManagementTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const HospitalManagementTabs: React.FC<HospitalManagementTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: HospitalManagementTab[] = [
    {
      id: 'hospital-info',
      label: '병원 정보',
      icon: <PiHospitalFill className="w-4 h-4" />,
    },
    {
      id: 'medical-staff',
      label: '의료진 관리',
      icon: <FiUsers className="w-4 h-4" />,
    },
    {
      id: 'collaboration-schedule',
      label: '협진 스케줄',
      icon: <FiCalendar className="w-4 h-4" />,
    },
    {
      id: 'system-settings',
      label: '시스템 설정',
      icon: <FiSettings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default HospitalManagementTabs;
