import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiMail, FiDownload, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/common';

const DigitalSignature: React.FC = () => {
  const navigate = useNavigate();

  const handleReturnToList = () => {
    navigate('/consultation/consultation-records');
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* 성공 메시지 카드 */}
        <div className="mb-8 rounded-lg border bg-white p-8 shadow-sm">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <FiCheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">소견서 생성 완료!</h1>
            <p className="mb-6 text-lg text-gray-600">
              전자 서명 요청이 성공적으로 전송되었습니다.
            </p>
          </div>
        </div>

        {/* 안내 정보 카드 */}
        <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">다음 단계 안내</h2>

          <div className="space-y-6">
            {/* 1단계: 메일 확인 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <span className="text-sm font-semibold text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-medium text-gray-900">메일 확인</h3>
                <p className="text-gray-600">
                  전문의와 지역의료진에게 전자 서명 요청 메일이 발송되었습니다. 각자의 이메일을
                  확인하여 서명을 진행해주세요.
                </p>
              </div>
              <FiMail className="h-6 w-6 text-blue-500" />
            </div>

            {/* 2단계: 서명 완료 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-sm font-semibold text-yellow-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-medium text-gray-900">서명 완료</h3>
                <p className="text-gray-600">
                  양쪽 의사 모두 서명을 완료하면 자동으로 다음 단계로 진행됩니다. 서명 진행 상황은
                  실시간으로 업데이트됩니다.
                </p>
              </div>
              <FiCheckCircle className="h-6 w-6 text-yellow-500" />
            </div>

            {/* 3단계: PDF 다운로드 */}
            <div className="flex items-start space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <span className="text-sm font-semibold text-green-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-medium text-gray-900">PDF 파일 수신</h3>
                <p className="text-gray-600">
                  모든 서명이 완료되면 완성된 소견서 PDF 파일이 이메일로 전송됩니다. 첨부된 파일을
                  다운로드하여 사용하실 수 있습니다.
                </p>
              </div>
              <FiDownload className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            type="secondary"
            color="blue"
            onClick={handleReturnToList}
            className="flex items-center justify-center"
          >
            <FiArrowLeft className="mr-2 h-4 w-4" />
            협진 기록으로 돌아가기
          </Button>
          <Button
            type="primary"
            color="blue"
            onClick={handleGoToDashboard}
            className="flex items-center justify-center"
          >
            대시보드로 이동
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignature;
