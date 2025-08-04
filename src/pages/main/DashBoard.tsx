import React, { useState } from 'react';
import {
  FiClock,
  FiVideo,
  FiCheck,
  FiHome,
  FiAlertTriangle,
  FiEdit,
  FiSearch,
  FiBell,
  FiFileText,
} from 'react-icons/fi';
import { StatCard, ActivityCard, ContentCard, Tabs, Button, Status, type TabItem } from '../../components/common';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  // 아이콘들
  const ClockIcon = () => <FiClock className="w-6 h-6" />;
  const VideoIcon = () => <FiVideo className="w-6 h-6" />;
  const CheckIcon = () => <FiCheck className="w-6 h-6" />;
  const BuildingIcon = () => <FiHome className="w-6 h-6" />;
  const ExclamationIcon = () => <FiAlertTriangle className="w-5 h-5" />;
  const PenIcon = () => <FiEdit className="w-5 h-5" />;
  const SearchIcon = () => <FiSearch className="w-5 h-5" />;
  const BellIcon = () => <FiBell className="w-6 h-6" />;
  const DocumentIcon = () => <FiFileText className="w-6 h-6" />;

  // 탭 데이터
  const tabs: TabItem[] = [
    { id: 'all', label: '전체' },
    { id: 'urgent', label: '긴급' },
    { id: 'in-progress', label: '진행중' },
    { id: 'completed', label: '완료' },
  ];

  // 활동 데이터
  const activities = [
    {
      id: '1',
      icon: <ExclamationIcon />,
      title: '긴급 협진 요청',
      subtitle: '환자 코드: P2024-008',
      metadata: '응급의학과 • 박응급 전문의',
      status: { label: '응급', variant: 'error' as const },
      time: '5분 전',
      variant: 'error' as const,
    },
    {
      id: '2',
      icon: <VideoIcon />,
      title: '화상 협진 진행 중',
      subtitle: '환자 코드: P2024-007',
      metadata: '소아청소년과 • 김소아 전문의',
      status: { label: '일반', variant: 'info' as const },
      time: '15분 전',
      variant: 'info' as const,
    },
    {
      id: '3',
      icon: <CheckIcon />,
      title: '협진 완료',
      subtitle: '환자 코드: P2024-006',
      metadata: '정신건강의학과 • 이정신 전문의',
      status: { label: '일반', variant: 'info' as const },
      time: '1시간 전',
      variant: 'success' as const,
    },
    {
      id: '4',
      icon: <CheckIcon />,
      title: '협진 요청 승인됨',
      subtitle: '환자 코드: P2024-005',
      metadata: '피부과 • 최피부 전문의',
      status: { label: '긴급', variant: 'error' as const },
      time: '2시간 전',
      variant: 'warning' as const,
    },
    {
      id: '5',
      icon: <PenIcon />,
      title: '의견서 작성 완료',
      subtitle: '환자 코드: P2024-004',
      metadata: '정형외과 • 정정형 전문의',
      status: { label: '일반', variant: 'info' as const },
      time: '3시간 전',
      variant: 'success' as const,
    },
  ];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
            <p className="text-sm text-gray-600">협진 현황 및 최근 활동을 확인하세요</p>
          </div>
          <Button
            type="primary"
            color="blue"
            icon={<SearchIcon />}
            onClick={() => console.log('New collaboration request clicked')}
          >
            새 협진 요청
          </Button>
        </div>
        {/* 협진 현황 요약 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">협진 현황 요약</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<ClockIcon />}
              value="5"
              label="협진 요청 대기"
              variant="warning"
              onClick={() => console.log('Pending requests clicked')}
            />
            <StatCard
              icon={<VideoIcon />}
              value="3"
              label="진행 중인 협진"
              variant="info"
              onClick={() => console.log('In progress clicked')}
            />
            <StatCard
              icon={<CheckIcon />}
              value="28"
              label="완료된 협진"
              variant="success"
              onClick={() => console.log('Completed clicked')}
            />
            <StatCard
              icon={<BuildingIcon />}
              value="12"
              label="연결된 전문병원"
              variant="default"
              onClick={() => console.log('Connected hospitals clicked')}
            />
          </div>
        </section>

        {/* 최근 활동 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">최근 활동</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {activities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    icon={activity.icon}
                    title={activity.title}
                    subtitle={activity.subtitle}
                    metadata={activity.metadata}
                    status={activity.status}
                    time={activity.time}
                    variant={activity.variant}
                    onClick={() => console.log('Activity clicked:', activity.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 빠른 작업 */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">빠른 작업</h2>
          <p className="text-sm text-gray-600 mb-4">자주 사용하는 기능에 빠르게 접근하세요</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContentCard
              icon={<SearchIcon />}
              title="전문병원 찾기"
              description="전문 분야별 병원 검색 및 협진 가능 의료진 확인"
              variant="default"
              onClick={() => console.log('Find hospital clicked')}
            />
            <ContentCard
              icon={<BellIcon />}
              title="긴급 협진 요청"
              description="응급환자 우선 처리를 위한 긴급 협진 요청"
              variant="warning"
              onClick={() => console.log('Emergency request clicked')}
            />
            <ContentCard
              icon={<DocumentIcon />}
              title="협진 기록 조회"
              description="환자별 과거 협진 이력 및 의견서 확인"
              variant="info"
              onClick={() => console.log('View records clicked')}
            />
            <ContentCard
              icon={<VideoIcon />}
              title="실시간 협진"
              description="진행 중인 화상 협진 참여 및 관리"
              variant="success"
              onClick={() => console.log('Real-time collaboration clicked')}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
