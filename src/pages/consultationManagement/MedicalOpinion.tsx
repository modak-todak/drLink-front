import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { Button, TextInput, Textarea, Card } from '../../components/common';
import STTSidebar from '../../components/medicalOpinion/STTSidebar';
import DoctorInfo from '../../components/medicalOpinion/DoctorInfo';

const MedicalOpinion: React.FC = () => {
  const navigate = useNavigate();

  // 폼 상태
  const [formData, setFormData] = useState({
    diagnosisCode: 'P2024-008',
    consultationId: 'C2024-008',
    consultationDateTime: '',
    department: '',
    diagnosticImpression: '',
    recommendations: '',
    createdAt: new Date().toISOString(),
    additionalNotes: '',
  });
  const [doctorInfo, setDoctorInfo] = useState({
    specialistName: '',
    specialistEmail: '',
    localDoctorName: '',
    localDoctorEmail: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  // STT 내용을 폼에 추가하는 함수
  const addToForm = (content: string, category: string) => {
    setFormData((prev) => ({
      ...prev,
      [category]:
        prev[category as keyof typeof prev] +
        (prev[category as keyof typeof prev] ? '\n\n' : '') +
        content,
    }));
  };

  // 폼 입력 처리
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleDoctorInfoChange = (field: string, value: string) => {
    setDoctorInfo((prev) => ({ ...prev, [field]: value }));
  };

  // 글자 수 계산
  const getCharCount = (text: string) => text.length;

  // 액션 핸들러들
  const handleCancel = () => navigate('/consultation/consultation-records');

  const handleComplete = () => {
    console.log('소견서 완성:', formData, doctorInfo);

    // DigitalSignature 페이지로 이동
    // navigate('/records/digital-signature');
  };

  const handleDownload = () => {
    console.log('다운로드');
  };

  return (
    <div className="flex h-full bg-gray-50">
      {/* 왼쪽 사이드바 - 의료진 정보 */}
      <DoctorInfo handleInputChange={handleDoctorInfoChange} doctorInfo={doctorInfo} />
      {/* 중앙 콘텐츠 영역 */}
      <div className="flex-1 overflow-y-auto p-6">
        <Card type="content" variant="default" className="mx-auto max-w-4xl space-y-6">
          {/* 환자 및 협진 정보 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">진료 식별 코드</label>
              <TextInput
                value={formData.diagnosisCode}
                onChange={(value) => handleInputChange('diagnosisCode', value)}
                placeholder="진료 식별 코드를 입력하세요"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">협진 ID</label>
              <TextInput
                value={formData.consultationId}
                onChange={(value) => handleInputChange('consultationId', value)}
                placeholder="협진 ID를 입력하세요"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">협진 일시</label>
              <input
                type="datetime-local"
                value={formData.consultationDateTime}
                onChange={(e) => handleInputChange('consultationDateTime', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="협진 일시를 선택하세요"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">진료과</label>
              <TextInput
                value={formData.department}
                onChange={(value) => handleInputChange('department', value)}
                placeholder="진료과를 입력하세요 (예: 소아청소년과, 내과)"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                진단 소견 <span className="text-red-500">*</span>
              </label>
              <Textarea
                value={formData.diagnosticImpression}
                onChange={(value) => handleInputChange('diagnosticImpression', value)}
                placeholder="환자의 진단명과 주요 소견을 입력하세요..."
                rows={4}
              />
              <div className="mt-1 text-right text-sm text-gray-500">
                {getCharCount(formData.diagnosticImpression)}/500자
              </div>
            </div>

            {/* 권고사항 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">권고사항</label>
              <Textarea
                value={formData.recommendations}
                onChange={(value) => handleInputChange('recommendations', value)}
                placeholder="환자 관리 및 주의사항을 입력하세요..."
                rows={4}
              />
              <div className="mt-1 text-right text-sm text-gray-500">
                {getCharCount(formData.recommendations)}/500자
              </div>
            </div>

            {/* 추가 의견 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">추가 의견</label>
              <Textarea
                value={formData.additionalNotes}
                onChange={(value) => handleInputChange('additionalNotes', value)}
                placeholder="기타 특이사항이나 추가 의견을 입력하세요..."
                rows={4}
              />
              <div className="mt-1 text-right text-sm text-gray-500">
                {getCharCount(formData.additionalNotes)}/500자
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
            <Button type="secondary" color="blue" onClick={handleCancel}>
              취소
            </Button>

            <Button type="primary" color="blue" onClick={handleComplete}>
              <FiDownload className="mr-2 h-4 w-4" />
              소견서 완성 및 PDF 생성
            </Button>
          </div>
        </Card>
      </div>

      {/* 오른쪽 STT 사이드바 */}
      <STTSidebar
        handleDownload={handleDownload}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        addToForm={addToForm}
      />
    </div>
  );
};

export default MedicalOpinion;
