import { useState } from 'react';
import { FiDownload, FiSearch } from 'react-icons/fi';
import { Button } from '../common';
interface STTRecord {
  id: string;
  timestamp: string;
  speaker: 'local' | 'specialist';
  content: string;
  category: 'diagnosis' | 'treatment' | 'recommendation' | 'followup';
}
const STTSidebar = ({
  handleDownload,
  searchQuery,
  setSearchQuery,
  addToForm,
}: {
  handleDownload: () => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  addToForm: (content: string, category: string) => void;
}) => {
  const [sttRecords] = useState<STTRecord[]>([
    {
      id: '1',
      timestamp: '14:32:15',
      speaker: 'local',
      content:
        '환자는 3세 남아로 3일전부터 고열과 함께 호흡곤란 증상을 보이고 있습니다. 체온은 39.2도이고 맥박은 분당 120회입니다.',
      category: 'diagnosis',
    },
    {
      id: '2',
      timestamp: '14:33:42',
      speaker: 'specialist',
      content:
        '네, 흉부 X-ray 결과를 확인해보겠습니다. 우하엽에 침윤 소견이 보이네요. 전형적인 폐렴 양상입니다.',
      category: 'diagnosis',
    },
    {
      id: '3',
      timestamp: '14:34:18',
      speaker: 'specialist',
      content:
        '항생제 처방을 권장합니다. 아목시실린 500mg을 8시간마다 7일간 투여하시고, 해열제는 필요시 사용하세요.',
      category: 'treatment',
    },
    {
      id: '4',
      timestamp: '14:35:25',
      speaker: 'local',
      content: '환자 관리에 특별히 주의해야 할 점이 있나요?',
      category: 'recommendation',
    },
    {
      id: '5',
      timestamp: '14:36:10',
      speaker: 'specialist',
      content:
        '수분 섭취를 충분히 하고, 호흡 상태를 지속적으로 관찰하세요. 3일 후 재진료가 필요합니다.',
      category: 'followup',
    },
  ]);
  const filteredRecords = sttRecords.filter((record) =>
    record.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-80 flex-col border-l border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">협진 음성 기록 (STT)</h3>
          <Button type="secondary" color="blue" onClick={handleDownload}>
            <FiDownload className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-sm text-blue-600">다운로드</span>
          </Button>
        </div>
      </div>

      {/* 검색창 */}
      <div className="border-b border-gray-200 p-4">
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Q 대화 내용에서 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 대화 내용 */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {filteredRecords.map((record) => (
          <div key={record.id} className="group relative">
            <div className="rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100">
              <div className="mb-2 flex items-start justify-between">
                <span
                  className={`text-sm font-medium ${record.speaker === 'local' ? 'text-blue-600' : 'text-green-600'}`}
                >
                  {record.speaker === 'local' ? '지역의' : '전문의'}
                </span>
                <span className="text-xs text-gray-500">{record.timestamp}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{record.content}</p>

              {/* 호버 시 추가 버튼들 */}
              <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToForm(record.content, 'diagnosticImpression')}
                    className="rounded bg-blue-500 px-2 py-1 text-xs text-white transition-colors hover:bg-blue-600"
                  >
                    진단에 추가
                  </button>
                  <button
                    onClick={() => addToForm(record.content, 'recommendations')}
                    className="rounded bg-blue-500 px-2 py-1 text-xs text-white transition-colors hover:bg-blue-600"
                  >
                    권고사항에 추가
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 사용 팁 */}
      <div className="border-t border-gray-200 bg-blue-50 p-4">
        <div className="space-y-2 text-sm text-blue-800">
          <p>💡 입력칸을 클릭 후 협진 내용의 + 버튼을 누르면 해당 텍스트가 자동 입력됩니다</p>
          <p>🔍 검색창에서 키워드로 특정 대화를 빠르게 찾을 수 있습니다</p>
        </div>
      </div>
    </div>
  );
};

export default STTSidebar;
