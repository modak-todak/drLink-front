import {http, HttpResponse} from "msw"
import type { ConsultationRecord } from "../../components/consultation";

export const mockConsultationRecords: ConsultationRecord[] = [
  {
    id: '1',
    type: 'normal',
    patientCode: 'P2024-009',
    patientInfo: {
      age: 45,
      department: '내과',
    },
    requestingDoctor: {
      name: '박시군',
      institution: '포천군보건의료원',
    },
    requestTime: '1월 16일 15:00',
    estimatedDuration: '20-30분',
    requestDate: '1월 15일 14:15',
    attachedFiles: 2,
    status: 'completed',
    specialistOpinion: {
      downloadStatus: '다운로드 완료 (1/1)',
      expirationTime: '1월 17일 15:00',
      isDownloaded: true,
    },
    mainSymptoms: '지속적인 복통과 소화불량, 위내시경 결과 확인 필요',
    createdAt: new Date('2024-01-15T14:15:00'),
  },
  {
    id: '2',
    type: 'normal',
    patientCode: 'P2024-010',
    patientInfo: {
      age: 67,
      department: '정신건강의학과',
    },
    requestingDoctor: {
      name: '김읍면',
      institution: '영주시보건소',
    },
    requestTime: '1월 17일 10:00',
    estimatedDuration: '40-60분',
    requestDate: '1월 15일 16:20',
    attachedFiles: 1,
    status: 'accepted',
    mainSymptoms: '우울증 증상 지속, 약물 조정 및 치료 방향 상담',
    createdAt: new Date('2024-01-15T16:20:00'),
  },
  {
    id: '3',
    type: 'urgent',
    patientCode: 'P2024-011',
    patientInfo: {
      age: 28,
      department: '산부인과',
    },
    requestingDoctor: {
      name: '최도서',
      institution: '제주도립병원',
    },
    requestTime: '1월 16일 09:00',
    estimatedDuration: '45-60분',
    requestDate: '1월 15일 20:45',
    attachedFiles: 4,
    status: 'pending',
    mainSymptoms: '임신 32주 조산 징후, 긴급 상담 필요',
    createdAt: new Date('2024-01-15T20:45:00'),
  },
];

export const handlers = [
  http.get(`/records`,  () => {
    const response = {
      data: {
        records:mockConsultationRecords
      },

    };
    return HttpResponse.json({...response});
  }),

]