export const formatDateTime = (dateTimeString: string): string => {
  if (!dateTimeString) return '';
  
  try {
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) return dateTimeString; // 유효하지 않은 날짜면 원본 반환
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } catch (error) {
    console.error('날짜 포맷팅 오류:', error);
    return dateTimeString; // 오류 시 원본 반환
  }
};