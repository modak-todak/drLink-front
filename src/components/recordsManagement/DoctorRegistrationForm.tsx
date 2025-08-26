import React, { useState } from 'react';
import { FiPlus, FiX, FiInfo } from 'react-icons/fi';
import { Button, TextInput, Textarea, Select, FileUpload } from '../common';
import { mockDoctorFormDefaults, mockSpecialtyOptions, mockDepartmentOptions } from '../../data/mockData';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  isSelected: boolean;
  isExpanded: boolean;
  timeSlots: TimeSlot[];
}

interface DoctorFormData {
  doctorName: string;
  specialty: string;
  licenseNumber: string;
  department: string;
  hospital: string;
  contact: string;
  email: string;
  profilePhoto: File | null;
  experience: string;
  education: string;
}

interface DoctorRegistrationFormProps {
  onSubmit: (formData: DoctorFormData, schedule: DaySchedule[]) => void;
  onCancel: () => void;
}

const DoctorRegistrationForm: React.FC<DoctorRegistrationFormProps> = ({ onSubmit, onCancel }) => {
  // 폼 상태
  const [formData, setFormData] = useState<DoctorFormData>({
    doctorName: mockDoctorFormDefaults.doctorName,
    specialty: '',
    licenseNumber: mockDoctorFormDefaults.licenseNumber,
    department: '',
    hospital: mockDoctorFormDefaults.hospital,
    contact: mockDoctorFormDefaults.contact,
    email: mockDoctorFormDefaults.email,
    profilePhoto: null,
    experience: '',
    education: '',
  });

  // 요일별 스케줄 상태
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: '월요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '화요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '수요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '목요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '금요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '토요일', isSelected: false, isExpanded: false, timeSlots: [] },
    { day: '일요일', isSelected: false, isExpanded: false, timeSlots: [] },
  ]);

  // 폼 입력 처리
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 파일 업로드 처리
  const handleFileUpload = (file: File) => {
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
  };

  // 요일 선택/해제
  const toggleDaySelection = (dayIndex: number) => {
    setSchedule((prev) =>
      prev.map((item, index) =>
        index === dayIndex ? { ...item, isSelected: !item.isSelected, isExpanded: !item.isSelected } : item
      )
    );
  };

  // 요일 확장/축소
  const toggleDayExpansion = (dayIndex: number) => {
    setSchedule((prev) =>
      prev.map((item, index) => (index === dayIndex ? { ...item, isExpanded: !item.isExpanded } : item))
    );
  };

  // 시간대 추가
  const addTimeSlot = (dayIndex: number) => {
    const newTimeSlot: TimeSlot = {
      id: Date.now().toString(),
      startTime: '09:00',
      endTime: '12:00',
    };

    setSchedule((prev) =>
      prev.map((item, index) => (index === dayIndex ? { ...item, timeSlots: [...item.timeSlots, newTimeSlot] } : item))
    );
  };

  // 시간대 삭제
  const removeTimeSlot = (dayIndex: number, timeSlotId: string) => {
    setSchedule((prev) =>
      prev.map((item, index) =>
        index === dayIndex ? { ...item, timeSlots: item.timeSlots.filter((slot) => slot.id !== timeSlotId) } : item
      )
    );
  };

  // 시간 변경
  const updateTimeSlot = (dayIndex: number, timeSlotId: string, field: 'startTime' | 'endTime', value: string) => {
    setSchedule((prev) =>
      prev.map((item, index) =>
        index === dayIndex
          ? {
              ...item,
              timeSlots: item.timeSlots.map((slot) => (slot.id === timeSlotId ? { ...slot, [field]: value } : slot)),
            }
          : item
      )
    );
  };

  // 폼 제출
  const handleSubmit = () => {
    onSubmit(formData, schedule);
  };

  // 선택된 요일 수와 총 시간대 수 계산
  const selectedDaysCount = schedule.filter((day) => day.isSelected).length;
  const totalTimeSlotsCount = schedule.reduce((total, day) => total + day.timeSlots.length, 0);

  return (
    <div className="space-y-6">
      {/* 기본 정보 */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">기본 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              의사 이름 <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={formData.doctorName}
              onChange={(value) => handleInputChange('doctorName', value)}
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
              onChange={(value) => handleInputChange('specialty', value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              의사 면허번호 <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={formData.licenseNumber}
              onChange={(value) => handleInputChange('licenseNumber', value)}
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
              onChange={(value) => handleInputChange('department', value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              소속 병원 <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={formData.hospital}
              onChange={(value) => handleInputChange('hospital', value)}
              placeholder="소속 병원을 입력하세요"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              연락처 <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={formData.contact}
              onChange={(value) => handleInputChange('contact', value)}
              placeholder="연락처를 입력하세요"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일 <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">프로필 사진</label>
            <FileUpload
              onFileSelect={handleFileUpload}
              accept="image/*"
              maxSize={5}
              label="프로필 사진을 업로드하세요"
            />
          </div>
        </div>
      </div>

      {/* 경력 사항 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">경력 사항</h2>
        <Textarea
          value={formData.experience}
          onChange={(value) => handleInputChange('experience', value)}
          placeholder="주요 경력 사항을 입력하세요 (최대 500자)"
          rows={4}
          maxLength={500}
        />
        <div className="text-right text-sm text-gray-500">{formData.experience.length}/500자</div>
      </div>

      {/* 학력 사항 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">학력 사항</h2>
        <Textarea
          value={formData.education}
          onChange={(value) => handleInputChange('education', value)}
          placeholder="학력 및 전문의 취득 과정을 입력하세요 (최대 500자)"
          rows={4}
          maxLength={500}
        />
        <div className="text-right text-sm text-gray-500">{formData.education.length}/500자</div>
      </div>

      {/* 원격협진 스케줄 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">원격협진 스케줄</h2>

        {/* 스케줄 요약 정보 */}
        {selectedDaysCount > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <span className="text-sm text-blue-800">선택된 요일: {selectedDaysCount}일</span>
                <span className="text-sm text-blue-800">총 시간대: {totalTimeSlotsCount}개</span>
              </div>
            </div>
          </div>
        )}

        {/* 요일별 스케줄 */}
        <div className="space-y-3">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className="border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={day.isSelected}
                    onChange={() => toggleDaySelection(dayIndex)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">{day.day}</span>
                </div>

                {day.isSelected && (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">협진 가능</span>
                    <Button type="secondary" color="blue" onClick={() => toggleDayExpansion(dayIndex)}>
                      {day.isExpanded ? '접기' : '펼치기'}
                    </Button>
                    <Button type="secondary" color="success" onClick={() => addTimeSlot(dayIndex)}>
                      <FiPlus className="w-4 h-4 mr-1" />
                      시간대 추가
                    </Button>
                  </div>
                )}
              </div>

              {/* 시간대 표시 */}
              {day.isSelected && day.isExpanded && day.timeSlots.length > 0 && (
                <div className="border-t border-gray-200 p-4 space-y-3">
                  {day.timeSlots.map((timeSlot) => (
                    <div key={timeSlot.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-gray-700">시작 시간</label>
                        <input
                          type="time"
                          value={timeSlot.startTime}
                          onChange={(e) => updateTimeSlot(dayIndex, timeSlot.id, 'startTime', e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-gray-700">종료 시간</label>
                        <input
                          type="time"
                          value={timeSlot.endTime}
                          onChange={(e) => updateTimeSlot(dayIndex, timeSlot.id, 'endTime', e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="text-sm text-gray-600">
                        {timeSlot.startTime} - {timeSlot.endTime}
                      </div>
                      <button
                        onClick={() => removeTimeSlot(dayIndex, timeSlot.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 원격협진 안내 */}
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
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button type="secondary" color="blue" onClick={onCancel}>
          취소
        </Button>
        <Button type="primary" color="success" onClick={handleSubmit}>
          의료진 등록
        </Button>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm;
