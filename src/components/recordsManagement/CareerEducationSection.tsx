import React from 'react';
import { Textarea } from '../common';

interface CareerEducationSectionProps {
  experience: string;
  education: string;
  onInputChange: (field: string, value: string) => void;
}

const CareerEducationSection: React.FC<CareerEducationSectionProps> = ({ experience, education, onInputChange }) => {
  return (
    <div className="space-y-6">
      {/* 경력 사항 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">경력 사항</h2>
        <Textarea
          value={experience}
          onChange={(value) => onInputChange('experience', value)}
          placeholder="주요 경력 사항을 입력하세요 (최대 500자)"
          rows={4}
          maxLength={500}
        />
        <div className="text-right text-sm text-gray-500">{experience.length}/500자</div>
      </div>

      {/* 학력 사항 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">학력 사항</h2>
        <Textarea
          value={education}
          onChange={(value) => onInputChange('education', value)}
          placeholder="학력 및 전문의 취득 과정을 입력하세요 (최대 500자)"
          rows={4}
          maxLength={500}
        />
        <div className="text-right text-sm text-gray-500">{education.length}/500자</div>
      </div>
    </div>
  );
};

export default CareerEducationSection;
