import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ConsultationRequestForm } from '../../components/consultation';
import type { ConsultationRequestData } from '../../components/consultation';

const ConsultationRequest: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL 파라미터에서 병원 ID 가져오기
  const preSelectedHospitalId = searchParams.get('hospitalId');

  const handleSubmit = async (data: Partial<ConsultationRequestData>) => {
    try {
      // TODO: API 호출로 협진 요청 전송
      console.log('협진 요청 데이터:', data);
      // 성공 시 대시보드로 이동
      alert('협진 요청이 성공적으로 전송되었습니다.');
      navigate('/dashboard');
    } catch (error) {
      console.error('협진 요청 전송 실패:', error);
      alert('협진 요청 전송에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCancel = () => {
    // 이전 페이지로 이동하거나 대시보드로 이동
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6 w-full">
        {/* 협진 요청 폼 */}
        <ConsultationRequestForm
          preSelectedHospitalId={preSelectedHospitalId || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default ConsultationRequest;
