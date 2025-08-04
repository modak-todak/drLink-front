import React from 'react';
import { StatCard, ContentCard, ActivityCard } from '../common/index';

const CardExample: React.FC = () => {
  // 아이콘들
  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const VideoIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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

  const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-5 5v-5zM4.19 4.19A2 2 0 004 6v6a2 2 0 002 2h2v2a2 2 0 002 2h8a2 2 0 002-2v-2h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-1.81 1.19z"
      />
    </svg>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Card Components</h1>

      {/* Stat Cards */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Stat Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<ClockIcon />}
            value="5"
            label="Pending Requests"
            change={{ value: '↑12%', isPositive: true }}
            variant="warning"
            onClick={() => console.log('Pending Requests clicked')}
          />
          <StatCard
            icon={<VideoIcon />}
            value="3"
            label="Active Sessions"
            change={{ value: '↑8%', isPositive: true }}
            variant="info"
            onClick={() => console.log('Active Sessions clicked')}
          />
          <StatCard
            icon={<CheckIcon />}
            value="28"
            label="Completed"
            change={{ value: '↑15%', isPositive: true }}
            variant="success"
            onClick={() => console.log('Completed clicked')}
          />
        </div>
      </div>

      {/* Content Cards */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Content Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard
            icon={<UserIcon />}
            title="Patient Information"
            description="This card contains patient-related information and medical records that can be accessed by authorized personnel only."
            action={{
              label: 'View Details',
              onClick: () => console.log('View Details clicked'),
            }}
            variant="info"
            onClick={() => console.log('Patient Information card clicked')}
          />
          <ContentCard
            icon={<ShieldIcon />}
            title="Security Status"
            description="All systems are secure and running normally. SSL encryption is active and all connections are protected."
            variant="success"
            onClick={() => console.log('Security Status card clicked')}
          />
        </div>
      </div>

      {/* Activity Cards */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Cards</h2>
        <div className="space-y-4">
          <ActivityCard
            icon={<BellIcon />}
            title="Emergency consultation request"
            subtitle="Patient Code: P2024-008"
            metadata="Emergency Medicine"
            status={{
              label: 'Emergency',
              variant: 'error',
            }}
            time="5 minutes ago"
            variant="error"
            onClick={() => console.log('Emergency activity clicked')}
          />
          <ActivityCard
            icon={<UserIcon />}
            title="New patient registration"
            subtitle="Patient Code: P2024-009"
            metadata="General Medicine"
            status={{
              label: 'New',
              variant: 'info',
            }}
            time="15 minutes ago"
            variant="info"
            onClick={() => console.log('New patient activity clicked')}
          />
          <ActivityCard
            icon={<CheckIcon />}
            title="Consultation completed"
            subtitle="Patient Code: P2024-007"
            metadata="Cardiology"
            status={{
              label: 'Completed',
              variant: 'success',
            }}
            time="1 hour ago"
            variant="success"
            onClick={() => console.log('Completed activity clicked')}
          />
        </div>
      </div>

      {/* Mixed Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Mixed Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard icon={<ClockIcon />} value="12" label="Total Patients" variant="default" />
          <ContentCard
            title="System Status"
            description="All systems are operating normally with no reported issues."
            variant="success"
          />
          <ActivityCard icon={<BellIcon />} title="System maintenance scheduled" time="2 hours ago" variant="warning" />
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Custom Styling Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            icon={<CheckIcon />}
            value="100%"
            label="Uptime"
            className="border-2 border-green-200"
            variant="success"
          />
          <ContentCard
            icon={<ShieldIcon />}
            title="Custom Styled Card"
            description="This card has custom styling applied through className prop."
            className="shadow-lg border-blue-200"
            variant="info"
          />
        </div>
      </div>
    </div>
  );
};

export default CardExample;
