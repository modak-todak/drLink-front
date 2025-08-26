import React from 'react';
import { Card } from '../common';
import { FiFileText, FiCheck } from 'react-icons/fi';

import type { DocumentInfo } from './types';

interface DocumentInfoCardProps {
  documentInfo: DocumentInfo;
}

const DocumentInfoCard: React.FC<DocumentInfoCardProps> = ({ documentInfo }) => {
  return (
    <Card type="content" variant="default" className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <FiFileText className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-900">서명 대상 소견서</h3>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600">진료 코드</label>
            <div className="text-lg font-bold text-gray-900">{documentInfo.patientCode}</div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">작성의</label>
            <div className="text-sm text-gray-900">{documentInfo.author}</div>
            <div className="text-sm text-blue-600">
              {documentInfo.hospital} {documentInfo.department}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">작성일시</label>
            <div className="text-sm text-gray-900">{documentInfo.createdAt}</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-green-800">KISA 전자서명법 준수</h4>
            <ul className="mt-2 text-sm text-green-700 space-y-1">
              <li>• 전자서명법 제3조에 따른 법적 효력</li>
              <li>• 공인인증기관 발급 인증서 사용</li>
              <li>• 의료법 제21조 준수(의무기록 작성)</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DocumentInfoCard;
