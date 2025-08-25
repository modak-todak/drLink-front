import React from 'react';
import { Tabs, type TabItem } from '../common';

interface ConsultationStatusTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  counts: {
    all: number;
    pending: number;
    accepted: number;
    completed: number;
  };
}

const ConsultationStatusTabs: React.FC<ConsultationStatusTabsProps> = ({ activeTab, onTabChange, counts }) => {
  const tabs: TabItem[] = [
    { id: 'all', label: `전체 (${counts.all})` },
    { id: 'pending', label: `대기중 (${counts.pending})` },
    { id: 'accepted', label: `수락됨 (${counts.accepted})` },
    { id: 'completed', label: `완료됨 (${counts.completed})` },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default ConsultationStatusTabs;
