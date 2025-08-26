import React from 'react';
import { Button } from '../common';

export interface MedicalStaff {
  id: string;
  name: string;
  specialty: string;
  licenseNumber: string;
  department: string;
  status: 'active' | 'inactive';
  availableTimes: string[];
  collaborationMethods: string[];
}

interface MedicalStaffCardProps {
  staff: MedicalStaff;
  onEdit: (staffId: string) => void;
  onDelete: (staffId: string) => void;
}

const MedicalStaffCard: React.FC<MedicalStaffCardProps> = ({ staff, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* 상단 상태 및 기본 정보 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {staff.name} {staff.specialty} 전문의
          </h3>
          <p className="text-sm text-gray-600 mb-1">면허번호: {staff.licenseNumber}</p>
          <p className="text-sm text-gray-600">진료과 {staff.department}</p>
        </div>
      </div>

      {/* 협진 가능 시간 */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">협진 가능 시간</h4>
        <div className="flex flex-wrap gap-2">
          {staff.availableTimes.map((time, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              {time}
            </span>
          ))}
        </div>
      </div>

      {/* 협진 방법 */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">협진 방법</h4>
        <div className="flex flex-wrap gap-2">
          {staff.collaborationMethods.map((method, index) => (
            <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex space-x-3">
        <Button type="secondary" color="blue" onClick={() => onEdit(staff.id)} className="flex-1">
          정보 수정
        </Button>
        <Button type="secondary" color="danger" onClick={() => onDelete(staff.id)} className="flex-1">
          삭제
        </Button>
      </div>
    </div>
  );
};

export default MedicalStaffCard;
