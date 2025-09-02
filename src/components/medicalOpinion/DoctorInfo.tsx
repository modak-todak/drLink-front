import { TextInput } from '../common';

const DoctorInfo = ({
  handleInputChange,
  doctorInfo,
}: {
  handleInputChange: (field: string, value: string) => void;
  doctorInfo: {
    specialistName: string;
    specialistEmail: string;
    localDoctorName: string;
    localDoctorEmail: string;
  };
}) => {
  return (
    <div className="w-80 border-r border-gray-200 bg-white p-6">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">의료진 정보</h3>
        <p className="text-sm text-gray-600">
          전자 서명 문서 생성을 위해 필요한 의료진 정보를 입력하세요.
        </p>
      </div>

      {/* 전문의 정보 */}
      <div className="mb-6">
        <h4 className="text-md mb-3 font-medium text-gray-800">전문의 정보</h4>
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">이름</label>
            <TextInput
              value={doctorInfo.specialistName || ''}
              onChange={(value) => handleInputChange('specialistName', value)}
              placeholder="전문의 이름"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">이메일</label>
            <TextInput
              value={doctorInfo.specialistEmail || ''}
              onChange={(value) => handleInputChange('specialistEmail', value)}
              placeholder="전문의 이메일"
            />
          </div>
        </div>
      </div>
      {/* 지역의료진 정보 */}
      <div className="mb-6">
        <h4 className="text-md mb-3 font-medium text-gray-800">지역의료진 정보</h4>
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">이름</label>
            <TextInput
              value={doctorInfo.localDoctorName || ''}
              onChange={(value) => handleInputChange('localDoctorName', value)}
              placeholder="지역의료진 이름"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">이메일</label>
            <TextInput
              value={doctorInfo.localDoctorEmail || ''}
              onChange={(value) => handleInputChange('localDoctorEmail', value)}
              placeholder="지역의료진 이메일"
            />
          </div>
        </div>
      </div>
      {/* 정보 확인 */}
      <div className="rounded-md bg-blue-50 p-3">
        <p className="text-sm text-blue-800">
          <span className="font-medium">💡 안내:</span> 입력한 메일로 전자 서명 문서가 발송됩니다
        </p>
      </div>
    </div>
  );
};

export default DoctorInfo;
