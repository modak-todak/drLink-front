//토큰 발급
export const handleGetToken = async () => {
  const apiKey = import.meta.env.VITE_UCANSIGN_API_KEY;
  if (!apiKey) {
    console.error('환경변수에 API 키가 설정되지 않았습니다.');
    return null;
  }

  try {
    const response = await fetch('https://app.ucansign.com/openapi/user/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: apiKey,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('토큰', data.result.accessToken, data);
      // setToken(data.result.accessToken || '');
      console.log('토큰이 성공적으로 발급되었습니다.');
      return data.result.accessToken;
    } else {
      const errorData = await response.json();
      console.error(`토큰 발급 실패: ${errorData.message || '알 수 없는 오류'}`);
    }
  } catch (error) {
    console.error(`토큰 발급 중 오류가 발생했습니다: ${error}`);
    return null;
  }
};

//서명 요청

export const handleSignRequest = async (data: any) => {
  try {
    //토큰 발급
    const token = await handleGetToken();
    if (!token) {
      console.error('토큰 발급 실패');
      return;
    }

    const templateId = '1961021387356336130';
    const response = await fetch(`https://app.ucansign.com/openapi/templates/${templateId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-ucansign-test': 'true',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.msg === 'Success') {
        alert('서명 요청이 성공적으로 전송되었습니다. 메일을 확인하고 서명해주세요');
        return { success: true, data: result };
      } else {
        console.error('서명 요청 실패: 예상하지 못한 응답');
        return { success: false, error: '예상하지 못한 응답', data: result };
      }
    } else {
      const errorData = await response.json();
      console.error('서명 요청 실패:', errorData);
      console.error(`서명 요청 실패: ${errorData.message || '알 수 없는 오류'}`);
    }
  } catch (error) {
    console.error('서명 요청 중 오류:', error);
    console.error(`서명 요청 중 오류가 발생했습니다: ${error}`);
  }
};
