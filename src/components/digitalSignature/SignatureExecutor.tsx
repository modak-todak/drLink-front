import React from 'react';
import { Card, Button } from '../common';

import type { Certificate, DocumentInfo } from './types';

interface SignatureExecutorProps {
  selectedCertificate: Certificate | null;
  password: string;
  onPasswordChange: (password: string) => void;
  onPrev: () => void;
  onExecute: () => void;
  documentInfo: DocumentInfo;
}

const SignatureExecutor: React.FC<SignatureExecutorProps> = ({
  selectedCertificate,
  password,
  onPasswordChange,
  onPrev,
  onExecute,
  documentInfo,
}) => {
  return (
    <Card type="content" variant="default" className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">전자서명 실행</h3>

      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
              <div className="font-medium text-gray-900">{selectedCertificate?.name}</div>
              <div className="text-sm text-gray-600">{selectedCertificate?.issuer}</div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            인증서 비밀번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="인증서 비밀번호를 입력하세요"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">서명 대상 문서 요약</h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div>환자코드: {documentInfo.patientCode}</div>
            <div>협진ID: {documentInfo.consultationId}</div>
            <div>작성일시: {documentInfo.createdAt}</div>
            <div>진단명: {documentInfo.diagnosis}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button type="secondary" color="blue" onClick={onPrev}>
          이전 단계
        </Button>
        <Button type="primary" color="blue" onClick={onExecute} disabled={!password}>
          전자서명 실행
        </Button>
      </div>
    </Card>
  );
};

export default SignatureExecutor;
