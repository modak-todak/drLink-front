import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <ProgressBar steps={steps} currentStep={currentStep} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
