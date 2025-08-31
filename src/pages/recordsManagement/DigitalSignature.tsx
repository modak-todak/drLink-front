import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProgressBar,
  DocumentInfoCard,
  SignatureMethodSelector,
  CertificateSelector,
  SignatureExecutor,
  SignatureComplete,
  type DocumentInfo,
  type Certificate,
  type Step,
} from '../../components/digitalSignature';

const DigitalSignature: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState<'saved' | 'mobile' | 'usb' | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoadingToken, setIsLoadingToken] = useState(false);

  // 문서 정보 (실제로는 props나 API에서 받아올 데이터)
  const documentInfo: DocumentInfo = {
    patientCode: 'P2024-008',
    patientName: '김**',
    author: '김소아 전문의',
    hospital: '서울대학교병원',
    department: '소아청소년과',
    diagnosis: '소아 폐렴 (Pediatric Pneumonia)',
    createdAt: '2024-01-15 15:30:00',
    consultationId: 'C2024-008',
  };

  // 인증서 목록
  const certificates: Certificate[] = [
    {
      id: '1',
      name: '김소아(의료진용)',
      issuer: '한국정보인증',
      validFrom: '2023-01-15',
      validTo: '2025-01-14',
      type: 'medical',
      isRecommended: true,
    },
    {
      id: '2',
      name: '김소아(범용)',
      issuer: '코스콤',
      validFrom: '2023-03-10',
      validTo: '2025-03-09',
      type: 'general',
    },
  ];

  const steps: Step[] = [
    { id: 1, title: '서명 방식 선택', description: 'Select Signature Method' },
    { id: 2, title: '인증서 선택', description: 'Select Certificate' },
    { id: 3, title: '전자서명', description: 'Digital Signature' },
    { id: 4, title: '완료', description: 'Complete' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleMethodSelect = (method: 'saved' | 'mobile' | 'usb') => {
    setSelectedMethod(method);
  };

  const handleCertificateSelect = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleSignatureExecute = () => {
    // 실제 전자서명 로직 구현
    console.log('전자서명 실행:', { selectedCertificate, password });
    handleNext();
  };

  const handleDownload = () => {
    // 서명된 소견서 다운로드 로직
    console.log('서명된 소견서 다운로드');
  };

  const handleReturnToList = () => {
    navigate('/consultation/consultation-records');
  };

  const handleGetToken = async () => {
    const apiKey = import.meta.env.VITE_UCANSIGN_API_KEY;
    if (!apiKey) {
      alert('환경변수에 API 키가 설정되지 않았습니다.');
      return;
    }

    setIsLoadingToken(true);
    try {
      const response = await fetch('https://app.ucansign.com/openapi/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('토큰', data.result.accessToken, data);
        setToken(data.result.accessToken || '');
        alert('토큰이 성공적으로 발급되었습니다.');
      } else {
        const errorData = await response.json();
        alert(`토큰 발급 실패: ${errorData.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      alert(`토큰 발급 중 오류가 발생했습니다: ${error}`);
    } finally {
      setIsLoadingToken(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SignatureMethodSelector
            selectedMethod={selectedMethod}
            onMethodSelect={handleMethodSelect}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <CertificateSelector
            certificates={certificates}
            selectedCertificate={selectedCertificate}
            onCertificateSelect={handleCertificateSelect}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <SignatureExecutor
            selectedCertificate={selectedCertificate}
            password={password}
            onPasswordChange={setPassword}
            onPrev={handlePrev}
            onExecute={handleSignatureExecute}
            documentInfo={documentInfo}
          />
        );
      case 4:
        return (
          <SignatureComplete
            documentInfo={documentInfo}
            selectedCertificate={selectedCertificate}
            onDownload={handleDownload}
            onReturnToList={handleReturnToList}
          />
        );
      default:
        return (
          <SignatureMethodSelector
            selectedMethod={selectedMethod}
            onMethodSelect={handleMethodSelect}
            onNext={handleNext}
          />
        );
    }
  };

  const fetchDocuments = async () => {
    if (!token) {
      alert('먼저 토큰을 발급받아주세요.');
      return;
    }

    const testData = {
      documentName: '소견서',
      participants: [
        {
          name: '홍길동',
          signingMethodType: 'email',
          signingContactInfo: 'wonny2327@gmail.com',
          signingOrder: 1,
        },
        {
          name: '김유캔',
          signingMethodType: 'email',
          signingContactInfo: 'wonny2327@gmail.com',
          signingOrder: 2,
        },
      ],
      fields: [
        { fieldName: 'consultationDateTime', value: '2025-08-29 15:30:00' },
        { fieldName: 'department', value: '소아청소년과' },
        { fieldName: 'diagnosisCode', value: 'J10.0' },
        { fieldName: 'diagnosticImpression', value: '실험적 진단' },
        { fieldName: 'recommendations', value: '소아 폐렴 Pneumonia' },
        { fieldName: 'additionalNotes', value: '소아 폐렴 Pneumonia' },
        { fieldName: 'createdAt', value: '2025-08-29 15:30:00' },
      ],
    };

    console.log('서명 요청 데이터:', testData);

    try {
      const templateId = '1961021387356336130';
      const response = await fetch(`https://app.ucansign.com/openapi/templates/${templateId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'x-ucansign-test': 'true',
        },
        body: JSON.stringify(testData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('서명 요청 성공:', result);
        alert('서명 요청이 성공적으로 전송되었습니다.');
      } else {
        const errorData = await response.json();
        console.error('서명 요청 실패:', errorData);
        alert(`서명 요청 실패: ${errorData.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('서명 요청 중 오류:', error);
      alert(`서명 요청 중 오류가 발생했습니다: ${error}`);
    }
  };

  const fetchDocumentList = async () => {
    if (!token) {
      alert('먼저 토큰을 발급받아주세요.');
      return;
    }

    try {
      console.log('문서 리스트 조회 시작...');
      const response = await fetch('https://app.ucansign.com/openapi/templates', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'x-ucansign-test': 'true',
        },
      });

      console.log('문서 조회 응답 상태:', response.status);
      console.log('문서 조회 응답 헤더:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const result = await response.json();
        console.log('문서 리스트 조회 성공:', result);
        alert(`문서 리스트 조회 성공! 문서 수: ${result.documents?.length || 0}`);
      } else {
        const errorData = await response.json();
        console.error('문서 리스트 조회 실패:', errorData);
        alert(
          `문서 리스트 조회 실패 (${response.status}): ${errorData.msg || errorData.message || '알 수 없는 오류'}`
        );
      }
    } catch (error) {
      console.error('문서 리스트 조회 중 오류:', error);
      alert(`문서 리스트 조회 중 오류가 발생했습니다: ${error}`);
    }
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* API 키 및 토큰 발급 섹션 */}
        <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">API 설정</h3>
          <div className="flex justify-center">
            <button
              onClick={handleGetToken}
              disabled={isLoadingToken}
              className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isLoadingToken ? '토큰 발급 중...' : '토큰 발급'}
            </button>
          </div>
          {token && (
            <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-800">
                <span className="font-medium">토큰 발급 완료:</span> {token.substring(0, 20)}...
              </p>
              {/* API 테스트 버튼들 */}
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  onClick={fetchDocumentList}
                  className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white transition-colors hover:bg-purple-700"
                >
                  📋 문서 리스트 조회
                </button>
                <button
                  onClick={fetchDocuments}
                  className="rounded-md bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-700"
                >
                  📝 서명 요청 보내기
                </button>
              </div>
            </div>
          )}
        </div>

        <ProgressBar steps={steps} currentStep={currentStep} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* 왼쪽 패널 - 문서 정보 */}
          <div className="lg:col-span-1">
            <DocumentInfoCard documentInfo={documentInfo} />
          </div>

          {/* 오른쪽 패널 - 현재 단계 */}
          <div className="lg:col-span-2">{renderCurrentStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSignature;
