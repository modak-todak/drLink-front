import React from 'react';
import { Card, Button } from '../common';
import { FiArrowRight } from 'react-icons/fi';

import type { Certificate } from './types';

interface CertificateSelectorProps {
  certificates: Certificate[];
  selectedCertificate: Certificate | null;
  onCertificateSelect: (certificate: Certificate) => void;
  onPrev: () => void;
  onNext: () => void;
}

const CertificateSelector: React.FC<CertificateSelectorProps> = ({
  certificates,
  selectedCertificate,
  onCertificateSelect,
  onPrev,
  onNext,
}) => {
  return (
    <Card type="content" variant="default" className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">인증서 선택</h3>

      <div className="space-y-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedCertificate?.id === cert.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onCertificateSelect(cert)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{cert.name}</div>
                  <div className="text-sm text-gray-600">발급기관: {cert.issuer}</div>
                  <div className="text-sm text-gray-600">
                    유효기간: {cert.validFrom} ~ {cert.validTo}
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        cert.type === 'medical' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {cert.type === 'medical' ? '의료진 전용' : '범용'}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">유효</span>
                  </div>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start space-x-2">
          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div>
            <div className="font-medium text-yellow-800">인증서 선택 안내</div>
            <div className="text-sm text-yellow-700 mt-1">
              의료진용 인증서 사용을 권장합니다. 범용 인증서도 사용 가능하지만 추가 인증 절차가 필요할 수 있습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button type="secondary" color="blue" onClick={onPrev}>
          이전 단계
        </Button>
        <Button type="primary" color="blue" onClick={onNext} disabled={!selectedCertificate}>
          다음 단계
        </Button>
      </div>
    </Card>
  );
};

export default CertificateSelector;
