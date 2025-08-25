import React, { useState, useEffect } from 'react';
import {
  TextInput,
  LabeledDropdown,
  Textarea,
  Checkbox,
  FileUpload,
  Button,
  Card,
  type DropdownOption,
} from '../common';
import type { ConsultationRequestData, HospitalSchedule, Specialist, TimeSlot } from './types';
import {
  mockDepartments,
  mockUrgencyLevels,
  mockHospitals,
  mockHospitalSchedules,
  mockSpecialists,
} from '../../data/mockData';

interface ConsultationRequestFormProps {
  preSelectedHospitalId?: string;
  onSubmit: (data: Partial<ConsultationRequestData>) => void;
  onCancel: () => void;
}

const ConsultationRequestForm: React.FC<ConsultationRequestFormProps> = ({
  preSelectedHospitalId,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    patientId: '',
    department: '',
    urgency: 'normal',
    hospitalId: preSelectedHospitalId || '',
    specialistId: '',
    preferredTime: '',
    symptoms: '',
    attachments: [] as File[],
    patientConsent: false,
  });

  const [availableSpecialists, setAvailableSpecialists] = useState<Specialist[]>([]);
  const [availableTimes, setAvailableTimes] = useState<TimeSlot[]>([]);

  // 목업 데이터
  const departments: DropdownOption[] = mockDepartments;
  const urgencyLevels: DropdownOption[] = mockUrgencyLevels;
  const hospitals: DropdownOption[] = mockHospitals.map((hospital) => ({ id: hospital.id, label: hospital.name }));
  const hospitalSchedules: HospitalSchedule[] = mockHospitalSchedules;
  const specialists: Specialist[] = mockSpecialists;

  // 병원이 선택되었을 때 해당 병원의 전문의 목록을 가져오는 함수
  useEffect(() => {
    if (formData.hospitalId) {
      const hospitalSpecialists = specialists.filter((spec) => spec.hospitalId === formData.hospitalId);
      setAvailableSpecialists(hospitalSpecialists);
    } else {
      setAvailableSpecialists([]);
    }
  }, [formData.hospitalId]);

  // 병원과 전문의가 선택되었을 때 해당 전문의가 가능한 시간을 가져오는 함수
  useEffect(() => {
    if (formData.hospitalId && formData.specialistId) {
      // 선택된 전문의의 정보 가져오기
      const selectedSpecialist = specialists.find((spec) => spec.id === formData.specialistId);

      if (selectedSpecialist) {
        // 해당 전문의가 가능한 시간만 필터링
        const specialistAvailableTimes = hospitalSchedules
          .filter((schedule) => schedule.hospitalId === formData.hospitalId)
          .flatMap((schedule) => schedule.timeSlots)
          .filter((slot) => slot.isAvailable && slot.specialistId === formData.specialistId);

        setAvailableTimes(specialistAvailableTimes);
      } else {
        setAvailableTimes([]);
      }
    } else {
      // 전문의가 선택되지 않은 경우 시간을 표시하지 않음
      setAvailableTimes([]);
    }
  }, [formData.hospitalId, formData.specialistId]);

  const handleInputChange = (field: string, value: string | boolean | File[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // 병원이 변경되면 관련 필드들을 초기화
    if (field === 'hospitalId') {
      setFormData((prev) => ({
        ...prev,
        [field]: value as string,
        specialistId: '' as string,
        preferredTime: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.patientConsent) {
      alert('환자 개인정보 활용 동의가 필요합니다.');
      return;
    }

    onSubmit(formData as Partial<ConsultationRequestData>);
  };

  const handleFileUpload = (files: File[]) => {
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeAttachment = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  return (
    <Card type="content" variant="default" className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 환자 정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">환자 정보</h3>

          <TextInput
            label="환자 식별코드 *"
            placeholder="예: P2024-001"
            value={formData.patientId}
            onChange={(value) => handleInputChange('patientId', value)}
            required
          />
        </div>

        {/* 협진 정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">협진 정보</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabeledDropdown
              label="요청 진료과 *"
              options={departments}
              selectedOption={formData.department}
              onOptionSelect={(value) => handleInputChange('department', value)}
              placeholder="진료과를 선택하세요"
            />

            <LabeledDropdown
              label="긴급도 *"
              options={urgencyLevels}
              selectedOption={formData.urgency}
              onOptionSelect={(value) => handleInputChange('urgency', value)}
              placeholder="긴급도를 선택하세요"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabeledDropdown
              label="협진 병원 선택 *"
              options={hospitals}
              selectedOption={formData.hospitalId}
              onOptionSelect={(value) => handleInputChange('hospitalId', value)}
              placeholder="병원을 선택하세요"
            />

            <LabeledDropdown
              label="담당 전문의 *"
              options={availableSpecialists.map((spec) => ({
                id: spec.id,
                label: `${spec.name} (${spec.department})`,
              }))}
              selectedOption={formData.specialistId}
              onOptionSelect={(value) => handleInputChange('specialistId', value)}
              placeholder="전문의를 선택하세요"
            />
          </div>
        </div>

        {/* 시간 선택 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            {formData.specialistId ? '전문의 협진 가능 시간 선택 *' : '협진 가능 시간 선택 *'}
          </h3>

          {availableTimes.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {availableTimes.map((timeSlot) => (
                <button
                  key={timeSlot.id}
                  type="button"
                  onClick={() => handleInputChange('preferredTime', timeSlot.time)}
                  className={`p-3 text-sm font-medium rounded-lg border transition-colors ${
                    formData.preferredTime === timeSlot.time
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {timeSlot.time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              {!formData.hospitalId
                ? '병원을 먼저 선택해주세요.'
                : !formData.specialistId
                ? '담당 전문의를 선택하면 협진 가능한 시간이 표시됩니다.'
                : '선택된 전문의에 협진 가능한 시간이 없습니다.'}
            </p>
          )}
        </div>

        {/* 증상 및 소견 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">증상 및 소견</h3>

          <Textarea
            label="주요 증상 및 소견 *"
            placeholder="환자의 주요 증상, 현재까지의 치료 과정, 의료진 소견 등을 상세히 기록해주세요..."
            value={formData.symptoms}
            onChange={(value) => handleInputChange('symptoms', value)}
            maxLength={500}
            rows={6}
            required
          />
        </div>

        {/* 첨부파일 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">의료 영상 및 검사기록 첨부</h3>

          <FileUpload
            label="의료 영상 및 검사기록 첨부 (CT, X-ray 등)"
            onFileSelect={(file) => handleFileUpload([file])}
            accept=".jpg,.jpeg,.png,.pdf,.dcm"
            maxSize={10 * 1024 * 1024} // 10MB
            multiple
          />

          {/* 첨부된 파일 목록 */}
          {formData.attachments.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">첨부된 파일</h4>
              <div className="space-y-2">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 동의 섹션 */}
        <div className="space-y-4">
          <Checkbox
            label="환자 개인정보 활용 동의 완료 *"
            checked={formData.patientConsent}
            onChange={(checked) => handleInputChange('patientConsent', checked)}
            required
          />
        </div>

        {/* 액션 버튼 */}
        <div className="flex justify-end space-x-3 pt-6 border-t">
          <Button type="secondary" color="blue" onClick={onCancel}>
            취소
          </Button>
          <Button
            type="primary"
            color="blue"
            onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>)}
            disabled={!formData.patientConsent}
          >
            요청서 전송
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ConsultationRequestForm;
