import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPlus, FiSearch, FiDownload } from 'react-icons/fi';
import { Button, TextInput, Textarea, Select, Card } from '../../components/common';
// IoIosDownload import 제거 (FiDownload 사용)

interface STTRecord {
  id: string;
  timestamp: string;
  speaker: 'local' | 'specialist';
  content: string;
  category: 'diagnosis' | 'treatment' | 'recommendation' | 'followup';
}

const MedicalOpinion: React.FC = () => {
  const navigate = useNavigate();

  // 폼 상태
  const [formData, setFormData] = useState({
    patientCode: 'P2024-008',
    consultationId: 'C2024-008',
    diagnosis: '',
    treatmentPlan: '',
    recommendations: '',
    followUp: '',
    urgency: 'normal',
    additionalNotes: '',
  });

  // STT 기록 데이터
  const [sttRecords] = useState<STTRecord[]>([
    {
      id: '1',
      timestamp: '14:32:15',
      speaker: 'local',
      content:
        '환자는 3세 남아로 3일전부터 고열과 함께 호흡곤란 증상을 보이고 있습니다. 체온은 39.2도이고 맥박은 분당 120회입니다.',
      category: 'diagnosis',
    },
    {
      id: '2',
      timestamp: '14:33:42',
      speaker: 'specialist',
      content: '네, 흉부 X-ray 결과를 확인해보겠습니다. 우하엽에 침윤 소견이 보이네요. 전형적인 폐렴 양상입니다.',
      category: 'diagnosis',
    },
    {
      id: '3',
      timestamp: '14:34:18',
      speaker: 'specialist',
      content: '항생제 처방을 권장합니다. 아목시실린 500mg을 8시간마다 7일간 투여하시고, 해열제는 필요시 사용하세요.',
      category: 'treatment',
    },
    {
      id: '4',
      timestamp: '14:35:25',
      speaker: 'local',
      content: '환자 관리에 특별히 주의해야 할 점이 있나요?',
      category: 'recommendation',
    },
    {
      id: '5',
      timestamp: '14:36:10',
      speaker: 'specialist',
      content: '수분 섭취를 충분히 하고, 호흡 상태를 지속적으로 관찰하세요. 3일 후 재진료가 필요합니다.',
      category: 'followup',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // STT 내용을 폼에 추가하는 함수
  const addToForm = (content: string, category: string) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] + (prev[category as keyof typeof prev] ? '\n\n' : '') + content,
    }));
  };

  // 폼 입력 처리
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 필터링된 STT 기록
  const filteredRecords = sttRecords.filter((record) =>
    record.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 글자 수 계산
  const getCharCount = (text: string) => text.length;

  // 액션 핸들러들
  const handleCancel = () => navigate('/consultation/consultation-records');
  const handleSaveDraft = () => {
    console.log('임시저장:', formData);
    alert('임시저장되었습니다.');
  };
  const handleComplete = () => {
    console.log('소견서 완성:', formData);
    alert('소견서가 완성되었습니다. PDF를 생성합니다.');
  };

  const handleDownload = () => {
    console.log('다운로드');
  };

  return (
    <div className="h-full flex bg-gray-50">
      {/* 중앙 콘텐츠 영역 */}
      <div className="flex-1 overflow-y-auto p-6">
        <Card type="content" variant="default" className="max-w-4xl mx-auto space-y-6">
          {/* 환자 및 협진 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">진료 식별 코드</label>
              <TextInput
                value={formData.patientCode}
                onChange={(value) => handleInputChange('patientCode', value)}
                placeholder="진료 식별 코드를 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">협진 ID</label>
              <TextInput
                value={formData.consultationId}
                onChange={(value) => handleInputChange('consultationId', value)}
                placeholder="협진 ID를 입력하세요"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                진단 소견 <span className="text-red-500">*</span>
              </label>
              <Textarea
                value={formData.diagnosis}
                onChange={(value) => handleInputChange('diagnosis', value)}
                placeholder="환자의 진단명과 주요 소견을 입력하세요..."
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">{getCharCount(formData.diagnosis)}/500자</div>
            </div>

            {/* 치료 계획 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                치료 계획 <span className="text-red-500">*</span>
              </label>
              <Textarea
                value={formData.treatmentPlan}
                onChange={(value) => handleInputChange('treatmentPlan', value)}
                placeholder="권장하는 치료 방법과 약물 처방을 입력하세요..."
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">{getCharCount(formData.treatmentPlan)}/500자</div>
            </div>

            {/* 권고사항 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권고사항</label>
              <Textarea
                value={formData.recommendations}
                onChange={(value) => handleInputChange('recommendations', value)}
                placeholder="환자 관리 및 주의사항을 입력하세요..."
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {getCharCount(formData.recommendations)}/500자
              </div>
            </div>

            {/* 후속 조치 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">후속 조치</label>
              <Textarea
                value={formData.followUp}
                onChange={(value) => handleInputChange('followUp', value)}
                placeholder="재진료 일정, 검사 계획 등을 입력하세요..."
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">{getCharCount(formData.followUp)}/500자</div>
            </div>

            {/* 긴급도 평가 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">긴급도 평가</label>
              <Select
                options={[
                  { value: 'normal', label: '일반' },
                  { value: 'urgent', label: '긴급' },
                  { value: 'emergency', label: '응급' },
                ]}
                value={formData.urgency}
                onChange={(value: string) => handleInputChange('urgency', value)}
                placeholder="긴급도를 선택하세요"
              />
            </div>

            {/* 추가 의견 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">추가 의견</label>
              <Textarea
                value={formData.additionalNotes}
                onChange={(value) => handleInputChange('additionalNotes', value)}
                placeholder="기타 특이사항이나 추가 의견을 입력하세요..."
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {getCharCount(formData.additionalNotes)}/500자
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <Button type="secondary" color="blue" onClick={handleCancel}>
              취소
            </Button>
            <Button type="secondary" color="blue" onClick={handleSaveDraft}>
              임시저장
            </Button>
            <Button type="primary" color="blue" onClick={handleComplete}>
              <FiDownload className="w-4 h-4 mr-2" />
              소견서 완성 및 PDF 생성
            </Button>
          </div>
        </Card>
      </div>

      {/* 오른쪽 STT 사이드바 */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">협진 음성 기록 (STT)</h3>
            <Button type="secondary" color="blue" onClick={handleDownload}>
              <FiDownload className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm text-blue-600">다운로드</span>
            </Button>
          </div>
        </div>

        {/* 검색창 */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Q 대화 내용에서 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 대화 내용 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filteredRecords.map((record) => (
            <div key={record.id} className="group relative">
              <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <span
                    className={`text-sm font-medium ${record.speaker === 'local' ? 'text-blue-600' : 'text-green-600'}`}
                  >
                    {record.speaker === 'local' ? '지역의' : '전문의'}
                  </span>
                  <span className="text-xs text-gray-500">{record.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{record.content}</p>

                {/* 호버 시 추가 버튼들 */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToForm(record.content, 'diagnosis')}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                    >
                      진단에 추가
                    </button>
                    <button
                      onClick={() => addToForm(record.content, 'treatmentPlan')}
                      className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors"
                    >
                      치료에 추가
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 사용 팁 */}
        <div className="p-4 border-t border-gray-200 bg-blue-50">
          <div className="text-sm text-blue-800 space-y-2">
            <p>💡 입력칸을 클릭 후 협진 내용의 + 버튼을 누르면 해당 텍스트가 자동 입력됩니다</p>
            <p>🔍 검색창에서 키워드로 특정 대화를 빠르게 찾을 수 있습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalOpinion;
