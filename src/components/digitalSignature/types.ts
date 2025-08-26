export interface DocumentInfo {
  patientCode: string;
  patientName: string;
  author: string;
  hospital: string;
  department: string;
  diagnosis: string;
  createdAt: string;
  consultationId: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  validFrom: string;
  validTo: string;
  type: 'medical' | 'general';
  isRecommended?: boolean;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}
