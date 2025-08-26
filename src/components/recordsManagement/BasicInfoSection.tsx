import React from 'react';
import { TextInput, Select, FileUpload } from '../common';
import { mockSpecialtyOptions, mockDepartmentOptions } from '../../data/mockData';

interface BasicInfoSectionProps {
  formData: {
    doctorName: string;
    specialty: string;
    licenseNumber: string;
    department: string;
    hospital: string;
    contact: string;
    email: string;
    profilePhoto: File | null;
  };
  onInputChange: (field: string, value: string) => void;
  onFileUpload: (file: File) => void;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ formData, onInputChange, onFileUpload }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">기본 정보</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            의사 이름 <span className="text-red-500">*</span>
          </label>
          <TextInput
            value={formData.doctorName}
            onChange={(value) => onInputChange('doctorName', value)}
            placeholder="의사 이름을 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            전문과 <span className="text-red-500">*</span>
          </label>
          <Select
            options={[{ value: '', label: '전문과를 선택하세요' }, ...mockSpecialtyOptions]}
            value={formData.specialty}
            onChange={(value) => onInputChange('specialty', value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            의사 면허번호 <span className="text-red-500">*</span>
          </label>
          <TextInput
            value={formData.licenseNumber}
            onChange={(value) => onInputChange('licenseNumber', value)}
            placeholder="의사 면허번호를 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            소속 진료과 <span className="text-red-500">*</span>
          </label>
          <Select
            options={[{ value: '', label: '진료과를 선택하세요' }, ...mockDepartmentOptions]}
            value={formData.department}
            onChange={(value) => onInputChange('department', value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            소속 병원 <span className="text-red-500">*</span>
          </label>
          <TextInput
            value={formData.hospital}
            onChange={(value) => onInputChange('hospital', value)}
            placeholder="소속 병원을 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <TextInput
            value={formData.contact}
            onChange={(value) => onInputChange('contact', value)}
            placeholder="연락처를 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            이메일 <span className="text-red-500">*</span>
          </label>
          <TextInput
            value={formData.email}
            onChange={(value) => onInputChange('email', value)}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">프로필 사진</label>
          <FileUpload onFileSelect={onFileUpload} accept="image/*" maxSize={5} label="프로필 사진을 업로드하세요" />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
