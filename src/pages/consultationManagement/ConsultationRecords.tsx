import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsultationStatusTabs, ConsultationRecordCard } from '../../components/consultation';
import { mockConsultationRecords } from '../../data/mockData';
import { useAccount } from '../../contexts/AccountContext';

const ConsultationRecords: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const { isHospitalAccount, isHealthCenterAccount } = useAccount();

  // 상태별 협진 기록 필터링
  const filteredRecords = useMemo(() => {
    if (activeTab === 'all') {
      return mockConsultationRecords;
    }
    return mockConsultationRecords.filter((record) => record.status === activeTab);
  }, [activeTab]);

  // 상태별 개수 계산
  const counts = useMemo(() => {
    const all = mockConsultationRecords.length;
    const pending = mockConsultationRecords.filter((r) => r.status === 'pending').length;
    const accepted = mockConsultationRecords.filter((r) => r.status === 'accepted').length;
    const completed = mockConsultationRecords.filter((r) => r.status === 'completed').length;

    return { all, pending, accepted, completed };
  }, []);

  // 이벤트 핸들러들
  const handleViewDetails = (recordId: string) => {
    console.log('상세보기:', recordId);
    // TODO: 상세보기 페이지로 이동
  };

  const handleAccept = (recordId: string) => {
    console.log('협진 수락:', recordId);
    // TODO: 협진 수락 API 호출
  };

  const handleReject = (recordId: string) => {
    console.log('협진 거절:', recordId);
    // TODO: 협진 거절 API 호출
  };

  const handleStartConsultation = (recordId: string) => {
    console.log('협진 시작:', recordId);
    // 실시간 협진 페이지로 이동
    navigate(`/consultation/live-consultation?recordId=${recordId}`);
  };

  const handleDownloadOpinion = (recordId: string) => {
    console.log('소견서 다운로드:', recordId);
    // TODO: 소견서 다운로드 API 호출
  };

  return (
    <div className="h-full overflow-y-auto p-6 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6 w-full">
        {/* 상태 탭 */}
        <ConsultationStatusTabs activeTab={activeTab} onTabChange={setActiveTab} counts={counts} />

        {/* 협진 기록 목록 */}
        <div className="space-y-4">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <ConsultationRecordCard
                key={record.id}
                record={record}
                isHospitalAccount={isHospitalAccount}
                isHealthCenterAccount={isHealthCenterAccount}
                onViewDetails={handleViewDetails}
                onAccept={handleAccept}
                onReject={handleReject}
                onStartConsultation={handleStartConsultation}
                onDownloadOpinion={handleDownloadOpinion}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">협진 기록이 없습니다</h3>
              <p className="text-gray-600">
                {activeTab === 'all'
                  ? '아직 협진 요청이 없습니다.'
                  : `'${
                      activeTab === 'pending' ? '대기중' : activeTab === 'accepted' ? '수락됨' : '완료됨'
                    }' 상태의 협진이 없습니다.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationRecords;
