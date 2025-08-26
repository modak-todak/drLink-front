import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Button, Card } from '../../components/common';
import { HospitalManagementTabs } from '../../components/common';
import MedicalStaffCard from '../../components/hospitalManagement/MedicalStaffCard';
import { mockMedicalStaff, removeMedicalStaff } from '../../data/mockData';

const HospitalManagement: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('medical-staff');

  // 목업 의료진 데이터는 mockData.ts에서 import

  // 탭 변경 처리
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // 새 의료진 추가 페이지로 이동
  const handleAddMedicalStaff = () => {
    navigate('/records/add-doctor');
  };

  // 의료진 정보 수정
  const handleEditMedicalStaff = (staffId: string) => {
    console.log('의료진 정보 수정:', staffId);
    // TODO: 의료진 정보 수정 페이지로 이동 또는 모달 열기
  };

  // 의료진 삭제
  const handleDeleteMedicalStaff = (staffId: string) => {
    const confirmed = window.confirm('정말로 이 의료진을 삭제하시겠습니까?');
    if (confirmed) {
      const success = removeMedicalStaff(staffId);
      if (success) {
        // 상태 업데이트를 위해 강제 리렌더링
        setActiveTab(activeTab);
        alert('의료진이 삭제되었습니다.');
      }
    }
  };

  // 의료진 관리 탭 렌더링
  const renderMedicalStaffTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">등록된 의료진</h2>
        <Button type="primary" color="blue" onClick={handleAddMedicalStaff}>
          <FiPlus className="w-4 h-4 mr-2" />새 의료진 추가
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMedicalStaff.map((staff) => (
          <MedicalStaffCard
            key={staff.id}
            staff={staff}
            onEdit={handleEditMedicalStaff}
            onDelete={handleDeleteMedicalStaff}
          />
        ))}
      </div>
    </div>
  );

  // 다른 탭들 렌더링 (아직 구현하지 않음)
  const renderOtherTabs = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center text-gray-500">
        <p className="text-lg font-medium mb-2">구현 예정</p>
        <p className="text-sm">이 기능은 추후 구현될 예정입니다.</p>
      </div>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <Card type="content" variant="default" className="max-w-7xl mx-auto space-y-6">
        {/* 탭 네비게이션 */}
        <HospitalManagementTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* 탭 콘텐츠 */}
        <div className="pt-6">
          {activeTab === 'medical-staff' && renderMedicalStaffTab()}
          {activeTab === 'hospital-info' && renderOtherTabs()}
          {activeTab === 'collaboration-schedule' && renderOtherTabs()}
          {activeTab === 'system-settings' && renderOtherTabs()}
        </div>
      </Card>
    </div>
  );
};

export default HospitalManagement;
