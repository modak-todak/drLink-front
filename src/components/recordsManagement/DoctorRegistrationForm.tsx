import React, { useState } from 'react';
import { Button } from '../common';
import { mockDoctorFormDefaults } from '../../data/mockData';
import BasicInfoSection from './BasicInfoSection';
import CareerEducationSection from './CareerEducationSection';
import ScheduleTable from './ScheduleTable';
import RemoteConsultationGuide from './RemoteConsultationGuide';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  isSelected: boolean;
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
    { day: '월요일', isSelected: false, timeSlots: [] },
    { day: '화요일', isSelected: false, timeSlots: [] },
    { day: '수요일', isSelected: false, timeSlots: [] },
    { day: '목요일', isSelected: false, timeSlots: [] },
    { day: '금요일', isSelected: false, timeSlots: [] },
    { day: '토요일', isSelected: false, timeSlots: [] },
    { day: '일요일', isSelected: false, timeSlots: [] },
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
      prev.map((item, index) => (index === dayIndex ? { ...item, isSelected: !item.isSelected } : item))
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

  return (
    <div className="space-y-6">
      {/* 기본 정보 */}
      <BasicInfoSection formData={formData} onInputChange={handleInputChange} onFileUpload={handleFileUpload} />

      {/* 경력 사항 */}
      <CareerEducationSection
        experience={formData.experience}
        education={formData.education}
        onInputChange={handleInputChange}
      />

      {/* 원격협진 스케줄 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">원격협진 스케줄</h2>

        {/* 요일별 스케줄 */}
        <ScheduleTable
          schedule={schedule}
          onToggleDaySelection={toggleDaySelection}
          onAddTimeSlot={addTimeSlot}
          onRemoveTimeSlot={removeTimeSlot}
          onUpdateTimeSlot={updateTimeSlot}
        />

        <RemoteConsultationGuide />
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
