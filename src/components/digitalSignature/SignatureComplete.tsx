import React from 'react';
import { Card, Button } from '../common';
import { FiCheck, FiDownload } from 'react-icons/fi';

import type { Certificate, DocumentInfo } from './types';

interface SignatureCompleteProps {
  documentInfo: DocumentInfo;
  selectedCertificate: Certificate | null;
  onDownload: () => void;
  onReturnToList: () => void;
}

const SignatureComplete: React.FC<SignatureCompleteProps> = ({
  documentInfo,
  selectedCertificate,
  onDownload,
  onReturnToList,
}) => {
  return (
    <Card type="content" variant="default" className="h-full">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheck className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">전자서명 완료</h3>
        <p className="text-gray-600 mb-8">소견서에 전자서명이 성공적으로 적용되었습니다.</p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h4 className="font-medium text-green-800 mb-4">서명 정보</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">서명자</div>
              <div className="font-medium text-gray-900">{documentInfo.author}</div>
            </div>
            <div>
              <div className="text-gray-600">서명 시각</div>
              <div className="font-medium text-gray-900">2025. 8. 22. 오후 3:15:05</div>
            </div>
            <div>
              <div className="text-gray-600">인증서 발급기관</div>
              <div className="font-medium text-gray-900">{selectedCertificate?.issuer}</div>
            </div>
            <div>
              <div className="text-gray-600">의료진 면허번호</div>
              <div className="font-medium text-gray-900">L2024-12345</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button type="primary" color="blue" onClick={onDownload} icon={<FiDownload className="w-4 h-4" />}>
            서명된 소견서 다운로드
          </Button>
          <Button type="secondary" color="blue" onClick={onReturnToList}>
            협진 목록으로 돌아가기
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SignatureComplete;
