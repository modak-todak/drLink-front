import { FiClock, FiHome, FiUsers, FiFileText, FiVideo, FiEdit, FiShield } from 'react-icons/fi';
import type { ConsultationRecord } from '../components/consultation/types';

// =============================================================================
// 목데이터 (Mock Data) - 개발 및 테스트용
// =============================================================================

// =============================================================================
// 병원 관련 목데이터
// =============================================================================

/**
 * 병원 목록 - HospitalDirectory 페이지에서 사용
 * 각 병원의 기본 정보와 전문분야, 협진 방법 등을 포함
 */
export const mockHospitals = [
  {
    id: '1',
    name: '서울대학교병원',
    location: '서울특별시 종로구',
    distance: '2.3km',
    averageTime: '15분',
    availableDoctors: 15,
    rating: 4.8,
    specialties: ['소아 중환자', '응급외상', '심혈관'],
    collaborationMethods: ['화상통화', '채팅', '전화'],
    department: 'internal',
  },
  {
    id: '2',
    name: '연세세브란스병원',
    location: '서울특별시 서대문구',
    distance: '3.1km',
    averageTime: '20분',
    availableDoctors: 12,
    rating: 4.7,
    specialties: ['정신건강', '성형외과', '관절'],
    collaborationMethods: ['화상통화', '채팅'],
    department: 'psychiatry',
  },
  {
    id: '3',
    name: '아산병원',
    location: '서울특별시 송파구',
    distance: '4.7km',
    averageTime: '12분',
    availableDoctors: 18,
    rating: 4.8,
    specialties: ['소아심장', '산모케어', '이비인후'],
    collaborationMethods: ['화상통화', '채팅'],
    department: 'pediatrics',
  },
  {
    id: '4',
    name: '삼성서울병원',
    location: '서울특별시 강남구',
    distance: '5.2km',
    averageTime: '10분',
    availableDoctors: 20,
    rating: 4.9,
    specialties: ['암치료', '심장수술', '뇌신경'],
    collaborationMethods: ['화상통화', '채팅', '전화', 'AR협진'],
    department: 'surgery',
  },
  {
    id: '5',
    name: '고려대학교병원',
    location: '서울특별시 성북구',
    distance: '1.8km',
    averageTime: '18분',
    availableDoctors: 14,
    rating: 4.6,
    specialties: ['응급의학', '외상외과', '재활의학'],
    collaborationMethods: ['화상통화', '전화'],
    department: 'emergency',
  },
  {
    id: '6',
    name: '경희대학교병원',
    location: '서울특별시 동대문구',
    distance: '3.5km',
    averageTime: '22분',
    availableDoctors: 16,
    rating: 4.5,
    specialties: ['심장내과', '신장내과', '내분비내과'],
    collaborationMethods: ['화상통화', '채팅', '전화'],
    department: 'cardiology',
  },
];

// =============================================================================
// 진료과 관련 목데이터
// =============================================================================

/**
 * 진료과 목록 - 협진 요청 폼과 HospitalDirectory에서 공통 사용
 * 협진을 요청할 수 있는 진료과들의 목록
 */
export const mockDepartments = [
  { id: 'internal', label: '내과' },
  { id: 'surgery', label: '외과' },
  { id: 'pediatrics', label: '소아과' },
  { id: 'emergency', label: '응급의학과' },
  { id: 'cardiology', label: '심장내과' },
  { id: 'neurology', label: '신경과' },
  { id: 'psychiatry', label: '정신건강의학과' },
];

/**
 * 진료과 필터 옵션 - HospitalDirectory에서 사용
 * 병원 검색 시 진료과별로 필터링할 수 있는 옵션들 (전체 포함)
 */
export const mockDepartmentFilterOptions = [
  { id: 'all', label: '전체' },
  { id: 'internal', label: '내과' },
  { id: 'surgery', label: '외과' },
  { id: 'pediatrics', label: '소아과' },
  { id: 'emergency', label: '응급의학과' },
  { id: 'cardiology', label: '심장내과' },
  { id: 'neurology', label: '신경과' },
  { id: 'psychiatry', label: '정신건강의학과' },
];

// =============================================================================
// 긴급도 관련 목데이터
// =============================================================================

/**
 * 긴급도 레벨 - 협진 요청 폼에서 사용
 * 협진 요청의 긴급 정도를 나타내는 레벨들
 */
export const mockUrgencyLevels = [
  { id: 'normal', label: '일반' },
  { id: 'urgent', label: '긴급' },
  { id: 'emergency', label: '응급' },
];

// =============================================================================
// 전문의 관련 목데이터
// =============================================================================

/**
 * 전문의 목록 - 협진 요청 폼에서 사용
 * 각 병원에 소속된 전문의들의 정보와 전문분야, 경험 등을 포함
 */
export const mockSpecialists = [
  {
    id: 'spec1',
    name: '김내과',
    department: 'internal',
    hospitalId: '1',
    rating: 4.8,
    experience: '15년',
    availableTimes: ['14:00'],
  },
  {
    id: 'spec2',
    name: '이외과',
    department: 'surgery',
    hospitalId: '1',
    rating: 4.7,
    experience: '12년',
    availableTimes: ['15:00'],
  },
  {
    id: 'spec3',
    name: '박소아과',
    department: 'pediatrics',
    hospitalId: '1',
    rating: 4.9,
    experience: '18년',
    availableTimes: ['09:00'],
  },
  {
    id: 'spec4',
    name: '최심장내과',
    department: 'cardiology',
    hospitalId: '1',
    rating: 4.6,
    experience: '20년',
    availableTimes: ['10:00'],
  },
  {
    id: 'spec5',
    name: '정응급의학',
    department: 'emergency',
    hospitalId: '5',
    rating: 4.5,
    experience: '10년',
    availableTimes: ['08:00', '16:00'],
  },
  {
    id: 'spec6',
    name: '한정신건강',
    department: 'psychiatry',
    hospitalId: '2',
    rating: 4.7,
    experience: '13년',
    availableTimes: ['10:00', '14:00'],
  },
];

// =============================================================================
// 병원 스케줄 관련 목데이터
// =============================================================================

/**
 * 병원별 스케줄 - 협진 요청 폼에서 사용
 * 각 병원의 협진 가능한 시간대와 해당 시간대에 배정된 전문의 정보
 */
export const mockHospitalSchedules = [
  {
    id: '1',
    hospitalId: '1',
    date: '2024-01-16',
    timeSlots: [
      { id: '1', time: '14:00', isAvailable: true, specialistId: 'spec1' },
      { id: '2', time: '15:00', isAvailable: true, specialistId: 'spec2' },
      { id: '3', time: '16:00', isAvailable: false },
    ],
  },
  {
    id: '2',
    hospitalId: '1',
    date: '2024-01-17',
    timeSlots: [
      { id: '4', time: '09:00', isAvailable: true, specialistId: 'spec3' },
      { id: '5', time: '10:00', isAvailable: true, specialistId: 'spec4' },
      { id: '6', time: '11:00', isAvailable: false },
    ],
  },
  {
    id: '3',
    hospitalId: '2',
    date: '2024-01-16',
    timeSlots: [
      { id: '7', time: '10:00', isAvailable: true, specialistId: 'spec6' },
      { id: '8', time: '14:00', isAvailable: true, specialistId: 'spec6' },
      { id: '9', time: '16:00', isAvailable: false },
    ],
  },
  {
    id: '4',
    hospitalId: '5',
    date: '2024-01-16',
    timeSlots: [
      { id: '10', time: '08:00', isAvailable: true, specialistId: 'spec5' },
      { id: '11', time: '16:00', isAvailable: true, specialistId: 'spec5' },
      { id: '12', time: '20:00', isAvailable: false },
    ],
  },
];

// =============================================================================
// 대시보드 관련 목데이터
// =============================================================================

/**
 * 협진 현황 요약 - 대시보드에서 사용
 * 현재 협진 상태를 한눈에 볼 수 있는 통계 정보
 */
export const mockConsultationStats = [
  { icon: 'clock', value: '5', label: '협진 요청 대기', variant: 'warning' },
  { icon: 'video', value: '3', label: '진행 중인 협진', variant: 'info' },
  { icon: 'check', value: '28', label: '완료된 협진', variant: 'success' },
  { icon: 'building', value: '12', label: '연결된 전문병원', variant: 'default' },
];

/**
 * 최근 활동 목록 - 대시보드에서 사용
 * 최근에 발생한 협진 관련 활동들을 시간순으로 정렬
 */
export const mockRecentActivities = [
  {
    id: '1',
    icon: 'user',
    title: '새로운 협진 요청',
    subtitle: '서울대학교병원 - 내과',
    metadata: '환자 ID: P2024-001',
    status: 'pending',
    time: '5분 전',
    variant: 'info',
  },
  {
    id: '2',
    icon: 'video',
    title: '실시간 협진 시작',
    subtitle: '연세세브란스병원 - 정신건강의학과',
    metadata: '담당의: 한정신건강',
    status: 'active',
    time: '15분 전',
    variant: 'success',
  },
  {
    id: '3',
    icon: 'file-text',
    title: '협진 소견서 작성 완료',
    subtitle: '아산병원 - 소아과',
    metadata: '환자 ID: P2024-002',
    status: 'completed',
    time: '1시간 전',
    variant: 'default',
  },
];

/**
 * 정렬 옵션 - HospitalDirectory에서 사용
 * 병원 목록을 정렬할 수 있는 기준들
 */
export const mockSortOptions = [
  { id: 'distance', label: '거리순' },
  { id: 'rating', label: '평점순' },
  { id: 'time', label: '응답시간순' },
  { id: 'doctors', label: '의사수순' },
];

// =============================================================================
// 협진 기록 관련 목데이터
// =============================================================================

/**
 * 협진 기록 목록 - ConsultationRecords 페이지에서 사용
 * 다양한 상태의 협진 기록들을 포함
 */
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

// =============================================================================
// 사이드바 네비게이션 관련 목데이터
// =============================================================================

/**
 * 사이드바 카테고리 - MainLayout에서 사용
 * 애플리케이션의 주요 기능들을 카테고리별로 그룹화
 * 아이콘, 경로, 제목을 모두 포함하여 바로 사용 가능
 */
export const mockSidebarCategories = [
  {
    id: 'main',
    title: '메인',
    items: [
      {
        id: 'dashboard',
        label: '대시보드',
        icon: FiClock,
        path: '/dashboard',
        title: '대시보드',
        subtitle: '협진 현황 및 최근 활동을 확인하세요',
        visible: true, // 사이드바에 표시
      },
      {
        id: 'find-hospital',
        label: '전문병원 협진 요청',
        icon: FiHome,
        path: '/main/hospital-directory',
        title: '전문병원 찾기',
        subtitle: '지역별 전문병원을 검색하고 정보를 확인하세요',
        visible: true, // 사이드바에 표시
      },
    ],
  },
  {
    id: 'collaboration',
    title: '협진 관리',
    items: [
      {
        id: 'collaboration-request',
        label: '협진 요청',
        icon: FiUsers,
        path: '/consultation/consultation-request',
        title: '협진 요청',
        subtitle: '새로운 협진을 요청하고 관리하세요',
        visible: false, // 사이드바에 표시하지 않음 (HospitalDirectory에서 직접 접근)
      },
      {
        id: 'collaboration-records',
        label: '협진 기록',
        icon: FiFileText,
        path: '/consultation/consultation-records',
        title: '협진 기록',
        subtitle: '이전 협진 기록을 조회하고 관리하세요',
        visible: true, // 사이드바에 표시
      },
      {
        id: 'real-time-collaboration',
        label: '실시간 협진',
        icon: FiVideo,
        path: '/consultation/live-consultation',
        title: '실시간 협진',
        subtitle: '실시간으로 협진을 진행하세요',
        visible: true, // 사이드바에 표시
      },
      {
        id: 'write-opinion',
        label: '소견서 작성',
        icon: FiEdit,
        path: '/consultation/medical-opinion',
        title: '소견서 작성',
        subtitle: '협진 소견서를 작성하고 관리하세요',
        visible: true, // 사이드바에 표시
      },
      {
        id: 'collaboration-history',
        label: '협진 이력',
        icon: FiClock,
        path: '/management/consultation-history',
        title: '협진 이력',
        subtitle: '전체 협진 이력을 조회하고 분석하세요',
        visible: true, // 사이드바에 표시
      },
    ],
  },

  {
    id: 'settings',
    title: '설정',
    items: [
      {
        id: 'hospital-info',
        label: '병원 정보 관리',
        icon: FiHome,
        path: '/records/hospital',
        title: '병원 정보 관리',
        subtitle: '병원 정보를 등록하고 관리하세요',
        visible: true, // 사이드바에 표시
      },
      {
        id: 'access-log',
        label: '접근 로그',
        icon: FiShield,
        path: '/records/access-logs',
        title: '접근 로그',
        subtitle: '시스템 접근 기록을 확인하세요',
        visible: true, // 사이드바에 표시
      },
    ],
  },
];

// =============================================================================
// 유틸리티 함수들
// =============================================================================

/**
 * 병원 ID로 병원 정보 찾기
 * @param hospitalId 병원 ID
 * @returns 병원 정보 또는 undefined
 */
export const findHospitalById = (hospitalId: string) => {
  return mockHospitals.find((hospital) => hospital.id === hospitalId);
};

/**
 * 병원 ID로 해당 병원의 전문의 목록 찾기
 * @param hospitalId 병원 ID
 * @returns 해당 병원의 전문의 목록
 */
export const findSpecialistsByHospitalId = (hospitalId: string) => {
  return mockSpecialists.filter((specialist) => specialist.hospitalId === hospitalId);
};

/**
 * 병원 ID로 해당 병원의 스케줄 찾기
 * @param hospitalId 병원 ID
 * @returns 해당 병원의 스케줄 목록
 */
export const findSchedulesByHospitalId = (hospitalId: string) => {
  return mockHospitalSchedules.filter((schedule) => schedule.hospitalId === hospitalId);
};

/**
 * 전문의 ID로 해당 전문의의 가능한 시간 찾기
 * @param specialistId 전문의 ID
 * @param hospitalId 병원 ID
 * @returns 해당 전문의가 가능한 시간대 목록
 */
export const findAvailableTimesBySpecialist = (specialistId: string, hospitalId: string) => {
  return mockHospitalSchedules
    .filter((schedule) => schedule.hospitalId === hospitalId)
    .flatMap((schedule) => schedule.timeSlots)
    .filter((slot) => slot.isAvailable && slot.specialistId === specialistId);
};
