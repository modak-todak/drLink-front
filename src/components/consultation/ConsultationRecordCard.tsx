import React from 'react';
import { Card, Button, Status } from '../common';
import type { ConsultationRecord } from './types';

interface ConsultationRecordCardProps {
  record: ConsultationRecord;
  isHospitalAccount: boolean;
  isHealthCenterAccount: boolean;
  onViewDetails: (recordId: string) => void;
  onAccept: (recordId: string) => void;
  onReject: (recordId: string) => void;
  onStartConsultation: (recordId: string) => void;
  onDownloadOpinion: (recordId: string) => void;
}

const ConsultationRecordCard: React.FC<ConsultationRecordCardProps> = ({
  record,
  isHospitalAccount,
  isHealthCenterAccount,
  onViewDetails,
  onAccept,
  onReject,
  onStartConsultation,
  onDownloadOpinion,
}) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'pending':
        return 'pending';
      case 'accepted':
        return 'in-progress';
      case 'completed':
        return 'completed';
      default:
        return 'pending';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'normal':
        return '일반';
      case 'urgent':
        return '긴급';
      case 'emergency':
        return '응급';
      default:
        return '일반';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'normal':
        return 'bg-blue-100 text-blue-800';
      case 'urgent':
        return 'bg-orange-100 text-orange-800';
      case 'emergency':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderActionButtons = () => {
    if (record.status === 'pending') {
      if (isHospitalAccount) {
        return (
          <div className="flex space-x-2">
            <Button type="secondary" color="danger" onClick={() => onReject(record.id)} className="px-4">
              거절
            </Button>
            <Button type="primary" color="success" onClick={() => onAccept(record.id)} className="px-4">
              수락
            </Button>
          </div>
        );
      } else if (isHealthCenterAccount) {
        return (
          <Button type="secondary" color="warning" disabled className="px-4">
            대기중
          </Button>
        );
      }
    } else if (record.status === 'accepted') {
      return (
        <Button type="primary" color="success" onClick={() => onStartConsultation(record.id)} className="px-4">
          협진 시작
        </Button>
      );
    } else if (record.status === 'completed' && record.specialistOpinion) {
      return (
        <Button
          type="primary"
          color="blue"
          onClick={() => onDownloadOpinion(record.id)}
          className="px-4"
          disabled={record.specialistOpinion?.isDownloaded}
        >
          {record.specialistOpinion?.isDownloaded ? '다운로드 완료' : '소견서 다운로드'}
        </Button>
      );
    }

    return null;
  };


  return (
    <Card type="content" variant="default" className="mb-4">
      {/* Header with Status */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(record.type)}`}>
            {getTypeLabel(record.type)}
          </span>
          <span className="text-sm font-medium text-gray-900">{record.patientCode}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Status type={getStatusVariant(record.status)} />
          {record.status === 'completed' && record.specialistOpinion?.isDownloaded && (
            <div className="flex items-center space-x-1 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs">소견서 준비됨</span>
            </div>
          )}
        </div>
      </div>

      {/* Consultation Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">요청 의료진</h4>
          <p className="text-sm text-gray-900">{record.requestingDoctor.name}</p>
          <p className="text-sm text-gray-900">{record.requestingDoctor.institution}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">요청 시간</h4>
          <p className="text-sm text-gray-900">{record.requestTime}</p>
          <p className="text-xs text-gray-600">예상 소요: {record.estimatedDuration}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">요청일</h4>
          <p className="text-sm text-gray-900">{record.requestDate}</p>
          <p className="text-xs text-gray-600">첨부파일: {record.attachedFiles}개</p>
        </div>
      </div>

      {/* Attached Files */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-1">첨부파일</h4>
        <p className="text-sm text-gray-900">{record.attachedFiles}개</p>
      </div>

      {/* Specialist Opinion Section (for completed consultations) */}
      {record.status === 'completed' && record.specialistOpinion && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <h4 className="text-sm font-medium text-green-800 mb-2">전문의 소견서</h4>
          <div className="space-y-2">
            <p className="text-sm text-green-700">다운로드 상태: {record.specialistOpinion.downloadStatus}</p>
            <p className="text-sm text-green-700">만료 시간: {record.specialistOpinion.expirationTime}</p>
            <p className="text-xs text-green-600">▲보안상 1회만 다운로드 가능하며, 24시간 후 자동 삭제됩니다</p>
          </div>
        </div>
      )}

      {/* Main Symptoms */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-1">주요 증상</h4>
        <p className="text-sm text-gray-900">{record.mainSymptoms}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <Button type="secondary" color="blue" onClick={() => onViewDetails(record.id)}>
          상세보기
        </Button>
        {renderActionButtons()}
      </div>
    </Card>
  );
};

export default ConsultationRecordCard;
