export interface ConsultationRequestData {
  id: string;
  patientId: string;
  department: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  hospitalId: string;
  specialistId: string;
  preferredTime: string;
  symptoms: string;
  attachments: File[];
  patientConsent: boolean;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface ConsultationRecord {
  id: string;
  type: 'normal' | 'urgent' | 'emergency';
  patientCode: string;
  patientInfo: {
    age: number;
    department: string;
  };
  requestingDoctor: {
    name: string;
    institution: string;
  };
  requestTime: string;
  estimatedDuration: string;
  requestDate: string;
  attachedFiles: number;
  status: 'pending' | 'accepted' | 'completed';
  specialistOpinion?: {
    downloadStatus: string;
    expirationTime: string;
    isDownloaded: boolean;
  };
  mainSymptoms: string;
  createdAt: Date;
}

export interface HospitalSchedule {
  id: string;
  hospitalId: string;
  date: string;
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
  specialistId?: string;
}

export interface Specialist {
  id: string;
  name: string;
  department: string;
  hospitalId: string;
  rating: number;
  experience: string;
  availableTimes: string[];
}

export interface Department {
  id: string;
  name: string;
  description?: string;
}

export interface UrgencyLevel {
  id: string;
  label: string;
  description: string;
  color: string;
}
