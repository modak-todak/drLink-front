import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  isSelected: boolean;
  timeSlots: TimeSlot[];
}

interface ScheduleTableProps {
  schedule: DaySchedule[];
  onToggleDaySelection: (dayIndex: number) => void;
  onAddTimeSlot: (dayIndex: number) => void;
  onRemoveTimeSlot: (dayIndex: number, timeSlotId: string) => void;
  onUpdateTimeSlot: (dayIndex: number, timeSlotId: string, field: 'startTime' | 'endTime', value: string) => void;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  schedule,
  onToggleDaySelection,
  onAddTimeSlot,
  onRemoveTimeSlot,
  onUpdateTimeSlot,
}) => {
  return (
    <div className="space-y-4">
      {/* 스케줄 요약 표 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">요일</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">상태</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">시간대</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {schedule.map((day, dayIndex) => (
              <tr key={day.day} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={day.isSelected}
                      onChange={() => onToggleDaySelection(dayIndex)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="font-medium text-gray-900">{day.day}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  {day.isSelected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      협진 가능
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Unavailable
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {day.isSelected && day.timeSlots.length > 0 ? (
                    <div className="space-y-2">
                      {day.timeSlots.map((timeSlot) => (
                        <div key={timeSlot.id} className="flex items-center space-x-3 p-2 bg-blue-50 rounded border">
                          <div className="flex items-center space-x-2">
                            <input
                              type="time"
                              value={timeSlot.startTime}
                              onChange={(e) => onUpdateTimeSlot(dayIndex, timeSlot.id, 'startTime', e.target.value)}
                              className="border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <span className="text-gray-500">-</span>
                            <input
                              type="time"
                              value={timeSlot.endTime}
                              onChange={(e) => onUpdateTimeSlot(dayIndex, timeSlot.id, 'endTime', e.target.value)}
                              className="border border-gray-300 rounded px-2 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <button
                            onClick={() => onRemoveTimeSlot(dayIndex, timeSlot.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title="시간대 삭제"
                          >
                            <FiX className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">시간 미설정</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    {day.isSelected ? (
                      <button
                        onClick={() => onAddTimeSlot(dayIndex)}
                        className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                        title="시간대 추가"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => onToggleDaySelection(dayIndex)}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                        title="시간대 추가"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
