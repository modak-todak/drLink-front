import { useState } from 'react';
import { handleSignRequest } from '../services/ucanSignService';

export const useDigitalSignature = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mappingData = (formData: any, doctorInfo: any) => {
    const {
      consultationDateTime,
      department,
      diagnosisCode,
      diagnosticImpression,
      recommendations,
      additionalNotes,
      createdAt,
    } = formData;
    const { specialistName, specialistEmail, localDoctorName, localDoctorEmail } = doctorInfo;
    return {
      documentName: '소견서',
      participants: [
        {
          name: specialistName,
          signingMethodType: 'email',
          signingContactInfo: specialistEmail,
          signingOrder: 1,
        },
        {
          name: localDoctorName,
          signingMethodType: 'email',
          signingContactInfo: localDoctorEmail,
          signingOrder: 2,
        },
      ],
      fields: [
        { fieldName: 'consultationDateTime', value: consultationDateTime },
        { fieldName: 'department', value: department },
        { fieldName: 'diagnosisCode', value: diagnosisCode },
        { fieldName: 'diagnosticImpression', value: diagnosticImpression },
        { fieldName: 'recommendations', value: recommendations },
        { fieldName: 'additionalNotes', value: additionalNotes },
        { fieldName: 'createdAt', value: createdAt },
      ],
    };
  };

  const processSignature = async (formData: any, doctorInfo: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = mappingData(formData, doctorInfo);
      const result = await handleSignRequest(data);

      if (result?.success) {
        return { success: true, data: result?.data };
      } else {
        setError(result?.error || '알 수 없는 오류가 발생했습니다.');
        return { success: false, error: result?.error || '알 수 없는 오류가 발생했습니다.' };
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, processSignature, error };
};
