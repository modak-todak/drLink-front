import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/common';
import type { SidebarCategory } from '../components/common/types';
import Header from '../components/common/Header';
import { mockSidebarCategories } from '../data/mockData';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 사이드바 카테고리 데이터 - 목업 데이터 사용 (visible: true인 메뉴만 표시)
  const sidebarCategories: SidebarCategory[] = mockSidebarCategories.map((category) => ({
    ...category,
    items: category.items
      .filter((item) => item.visible !== false) // visible이 false가 아닌 메뉴만 표시
      .map((item) => ({
        ...item,
        onClick: () => navigate(item.path || ''),
      })),
  }));

  // 현재 경로에 따라 활성 메뉴 ID를 결정하는 함수 - 사이드바 데이터에서 직접 가져오기
  const getActiveItem = (): string => {
    const path = location.pathname;

    // 사이드바 데이터에서 해당 경로의 메뉴 ID 찾기
    for (const category of mockSidebarCategories) {
      const item = category.items.find((item) => item.path === path);
      if (item) {
        return item.id;
      }
    }

    return 'dashboard';
  };

  // 현재 경로에 따라 헤더 텍스트를 결정하는 함수 - 사이드바 데이터에서 직접 가져오기
  const getHeaderText = () => {
    const path = location.pathname;

    // 사이드바 데이터에서 해당 경로의 헤더 정보 찾기
    for (const category of mockSidebarCategories) {
      const item = category.items.find((item) => item.path === path);
      if (item) {
        return { title: item.title, subtitle: item.subtitle };
      }
    }

    // 기본값 반환
    return { title: 'Dr.Link', subtitle: '지역의료기관 전문의 협진 관리 시스템' };
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
        <Header {...getHeaderText()} />

        {/* Page Content */}
        <div className="flex-1 min-h-0 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
