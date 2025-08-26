import React from 'react';
import { Card, Button } from '../common';
import { FiArrowRight } from 'react-icons/fi';

interface SignatureMethodSelectorProps {
  selectedMethod: 'saved' | 'mobile' | 'usb' | null;
  onMethodSelect: (method: 'saved' | 'mobile' | 'usb') => void;
  onNext: () => void;
}

const SignatureMethodSelector: React.FC<SignatureMethodSelectorProps> = ({
  selectedMethod,
  onMethodSelect,
  onNext,
}) => {
  return (
    <Card type="content" variant="default" className="h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">전자서명 방식 선택</h3>

      <div className="space-y-4">
        <div
          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            selectedMethod === 'saved' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => onMethodSelect('saved')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">저장된 인증서 (권장)</div>
                <div className="text-sm text-gray-600">컴퓨터에 저장된 공인인증서를 사용합니다.</div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">빠른 서명</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">높은 보안</span>
                </div>
              </div>
            </div>
            <FiArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-500">모바일 인증서</div>
              <div className="text-sm text-gray-400">모바일 기기에 저장된 인증서를 사용합니다.</div>
              <div className="text-xs text-gray-400 mt-1">개발 예정</div>
            </div>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-500">USB 토큰</div>
              <div className="text-sm text-gray-400">USB 보안토큰에 저장된 인증서를 사용합니다.</div>
              <div className="text-xs text-gray-400 mt-1">개발 예정</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="primary" color="blue" onClick={onNext} disabled={!selectedMethod}>
          다음 단계
        </Button>
      </div>
    </Card>
  );
};

export default SignatureMethodSelector;
