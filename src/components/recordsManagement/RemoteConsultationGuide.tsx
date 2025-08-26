import React from 'react';
import { FiInfo } from 'react-icons/fi';

const RemoteConsultationGuide: React.FC = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <FiInfo className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-800 space-y-1">
          <p>• 최소 1일 이상의 협진 가능 요일을 선택해주세요</p>
          <p>• 하루에 여러 시간대를 설정할 수 있습니다 (예: 오전 9-12시, 오후 2-5시)</p>
          <p>• 설정한 시간대에 협진 요청을 받을 수 있습니다</p>
          <p>• 긴급 상황 시 설정 시간 외에도 협진 요청이 올 수 있습니다</p>
          <p>• 원격협진 방법은 환자 상황에 따라 조정될 수 있습니다</p>
        </div>
      </div>
    </div>
  );
};

export default RemoteConsultationGuide;
