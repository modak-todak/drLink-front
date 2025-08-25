import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiMonitor, FiSquare, FiX } from 'react-icons/fi';
import { useAccount } from '../../contexts/AccountContext';

const LiveConsultation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isHospitalAccount, isHealthCenterAccount } = useAccount();

  const [isRecording, setIsRecording] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const recordId = searchParams.get('recordId');

  // 타이머 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 시간 포맷팅
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 협진 종료 처리
  const handleEndConsultation = () => {
    if (isHospitalAccount) {
      const confirmed = window.confirm('협진을 종료하시겠습니까? 종료 후 소견서 작성 페이지로 이동합니다.');
      if (confirmed) {
        navigate('/consultation/medical-opinion');
      }
    } else if (isHealthCenterAccount) {
      alert('소견서 작성이 완료되면 협진기록 페이지에서 다운받을 수 있습니다.');
      navigate('/consultation/consultation-records');
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* 상단 헤더 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-gray-600">환자 코드: P2024-002 | 소아청소년과</div>
          </div>
          <div className="flex items-center space-x-4">
            {/* LIVE 상태 */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-600 font-semibold">LIVE</span>
            </div>
            {/* 진행시간 */}
            <div className="text-gray-700 font-medium">진행시간: {formatTime(elapsedTime)}</div>
            {/* 녹화 상태 */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-red-600 text-sm">녹화 중</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 flex">
        {/* 왼쪽 메인 영역 */}
        <div className="flex-1 relative bg-blue-900">
          {/* 배경 이미지 (X-ray) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">📷</div>
              <div className="text-xl">흉부 X-ray 이미지</div>
            </div>
          </div>

          {/* 화상 피드 오버레이 */}
          <div className="absolute top-4 left-4">
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center text-xs text-gray-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                    <FiVideo className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>000 전문의</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center text-xs text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                    <FiVideo className="w-4 h-4 text-green-600" />
                  </div>
                  <div>나</div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 제어 바 */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
              {/* 마이크 버튼 */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full transition-colors ${
                  isMuted ? 'bg-gray-200 text-gray-600' : 'bg-blue-500 text-white'
                }`}
              >
                {isMuted ? <FiMicOff className="w-5 h-5" /> : <FiMic className="w-5 h-5" />}
              </button>

              {/* 카메라 버튼 */}
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 rounded-full transition-colors ${
                  isVideoOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {isVideoOn ? <FiVideo className="w-5 h-5" /> : <FiVideoOff className="w-5 h-5" />}
              </button>

              {/* 화면 공유 버튼 */}
              <button
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`p-3 rounded-full transition-colors ${
                  isScreenSharing ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {isScreenSharing ? <FiSquare className="w-5 h-5" /> : <FiMonitor className="w-5 h-5" />}
              </button>

              {/* 협진 종료 버튼 */}
              <button
                onClick={handleEndConsultation}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 STT 사이드바 */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">STT 자동 기록</h3>
          </div>

          {/* 대화 내용 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-xs text-gray-500">14:32</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-blue-600">지역의:</span>
                  <span className="text-sm text-gray-700 ml-2">
                    환자는 3세 남아로 고열과 함께 호흡곤란 증상을 보이고 있습니다.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-xs text-gray-500">14:33</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-green-600">전문의:</span>
                  <span className="text-sm text-gray-700 ml-2">
                    흉부 X-ray 결과를 확인해보겠습니다. 폐렴 소견이 보이네요.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-xs text-gray-500">14:34</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-blue-600">지역의:</span>
                  <span className="text-sm text-gray-700 ml-2">
                    항생제 투여를 고려하고 있는데, 어떤 약물을 권장하시나요?
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-xs text-gray-500">14:35</span>
                <div className="flex-1">
                  <span className="text-sm font-medium text-green-600">전문의:</span>
                  <span className="text-sm text-gray-700 ml-2">
                    환아의 체중과 알레르기 이력을 고려할 때 아목시실린 처방을 권합니다.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 상태 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">실시간 기록 중...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveConsultation;
