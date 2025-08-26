import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common';
import DoctorRegistrationForm from '../../components/recordsManagement/DoctorRegistrationForm';
import { addMedicalStaff } from '../../data/mockData';

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

const AddDoctor: React.FC = () => {
  const navigate = useNavigate();

  // 폼 제출 처리
  const handleSubmit = (formData: DoctorFormData, schedule: DaySchedule[]) => {
    // 스케줄에서 선택된 요일의 시간대를 추출
    const availableTimes = schedule
      .filter((day) => day.isSelected && day.timeSlots.length > 0)
      .flatMap((day) => day.timeSlots.map((slot) => `${slot.startTime}-${slot.endTime}`));

    // 협진 방법은 기본적으로 화상통화와 채팅으로 설정
    const collaborationMethods = ['화상통화', '채팅'];

    // 새로운 의료진 데이터 생성
    const newMedicalStaff = {
      name: formData.doctorName,
      specialty: formData.specialty,
      licenseNumber: formData.licenseNumber,
      department: formData.department,
      status: 'active' as const,
      availableTimes,
      collaborationMethods,
    };

    // 의료진 목록에 추가
    addMedicalStaff(newMedicalStaff);

    console.log('의료진 등록:', { formData, schedule, newMedicalStaff });
    alert('의료진이 성공적으로 등록되었습니다.');
    navigate(-1);
  };

  // 폼 취소 처리
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 overflow-y-scroll p-6 h-full">
      <Card type="content" variant="default" className="max-w-4xl mx-auto space-y-6">
        <DoctorRegistrationForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </Card>
    </div>
  );
};

export default AddDoctor;
