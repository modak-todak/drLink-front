import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FiClock, FiHome, FiUsers, FiFileText, FiVideo, FiEdit, FiShield } from 'react-icons/fi';
import { Sidebar } from '../components/common';
import type { SidebarCategory } from '../components/common/types';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 아이콘들
  const ClockIcon = () => <FiClock className="w-5 h-5" />;
  const BuildingIcon = () => <FiHome className="w-5 h-5" />;
  const UsersIcon = () => <FiUsers className="w-5 h-5" />;
  const DocumentIcon = () => <FiFileText className="w-5 h-5" />;
  const VideoIcon = () => <FiVideo className="w-5 h-5" />;
  const PenIcon = () => <FiEdit className="w-5 h-5" />;
  const ShieldIcon = () => <FiShield className="w-5 h-5" />;

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
          onClick: () => navigate('/dashboard'),
        },
        {
          id: 'find-hospital',
          label: '전문병원 찾기',
          icon: <BuildingIcon />,
          onClick: () => navigate('/main/hospital-directory'),
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
          onClick: () => navigate('/consultation/consultation-request'),
        },
        {
          id: 'collaboration-records',
          label: '협진 기록',
          icon: <DocumentIcon />,
          onClick: () => navigate('/consultation/consultation-records'),
        },
        {
          id: 'real-time-collaboration',
          label: '실시간 협진',
          icon: <VideoIcon />,
          onClick: () => navigate('/consultation/live-consultation'),
        },
        {
          id: 'write-opinion',
          label: '소견서 작성',
          icon: <PenIcon />,
          onClick: () => navigate('/consultation/medical-opinion'),
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
          icon: <ClockIcon />,
          onClick: () => navigate('/management/consultation-history'),
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
          onClick: () => navigate('/records/hospital'),
        },
        {
          id: 'access-log',
          label: '접근 로그',
          icon: <ShieldIcon />,
          onClick: () => navigate('/records/access-logs'),
        },
      ],
    },
  ];

  // 현재 경로에 따라 활성 메뉴 ID를 결정하는 함수
  const getActiveItem = (): string => {
    const path = location.pathname;

    // 경로별 활성 메뉴 매핑
    const pathToItemMap: { [key: string]: string } = {
      '/dashboard': 'dashboard',
      '/main/hospital-directory': 'find-hospital',
      '/consultation/consultation-request': 'collaboration-request',
      '/consultation/consultation-records': 'collaboration-records',
      '/consultation/live-consultation': 'real-time-collaboration',
      '/consultation/medical-opinion': 'write-opinion',
      '/management/consultation-history': 'collaboration-history',
      '/records/hospital': 'hospital-info',
      '/records/access-logs': 'access-log',
    };

    return pathToItemMap[path] || 'dashboard';
  };

  const handleItemClick = (itemId: string) => {
    sidebarCategories.forEach((category) => {
      category.items.forEach((item) => {
        if (item.id === itemId) {
          if (item.onClick) {
            item.onClick();
          }
        }
      });
    });
  };

  return (
    <div className="flex h-screen bg-gray-50 w-full max-w-full overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar categories={sidebarCategories} activeItem={getActiveItem()} onItemClick={handleItemClick} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr.Link</h1>
              <p className="text-sm text-gray-600">지역의료기관 전문의 협진 관리 시스템</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">온라인</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 min-h-0 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
