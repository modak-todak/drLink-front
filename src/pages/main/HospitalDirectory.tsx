import React, { useState } from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { SearchInput, Dropdown, type DropdownOption } from '../../components/common';
import { HospitalCard, type HospitalCardProps } from '../../components/hospitalDirectory';
import { useNavigate } from 'react-router-dom';

const HospitalDirectory: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedSort, setSelectedSort] = useState('distance');

  // 드롭다운 옵션들
  const departmentOptions: DropdownOption[] = [
    { id: 'all', label: '전체' },
    { id: 'internal', label: '내과' },
    { id: 'surgery', label: '외과' },
    { id: 'pediatrics', label: '소아과' },
    { id: 'emergency', label: '응급의학과' },
    { id: 'cardiology', label: '심장내과' },
    { id: 'neurology', label: '신경과' },
    { id: 'psychiatry', label: '정신건강의학과' },
  ];

  const sortOptions: DropdownOption[] = [
    { id: 'distance', label: '거리순' },
    { id: 'rating', label: '평점순' },
    { id: 'time', label: '응답시간순' },
    { id: 'doctors', label: '의사수순' },
  ];

  // 병원 데이터
  const hospitals: HospitalCardProps[] = [
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
      onRequestCollaboration: () => navigate('/consultation/consultation-request'),
      onViewDetails: () => console.log('서울대학교병원 상세정보'),
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
      onRequestCollaboration: () => navigate('/consultation/consultation-request'),
      onViewDetails: () => console.log('연세세브란스병원 상세정보'),
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
      onRequestCollaboration: () => navigate('/consultation/consultation-request'),
      onViewDetails: () => console.log('아산병원 상세정보'),
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
      onRequestCollaboration: () => navigate('/consultation/consultation-request'),
      onViewDetails: () => console.log('삼성서울병원 상세정보'),
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleDepartmentChange = (departmentId: string) => {
    setSelectedDepartment(departmentId);
    console.log('Department changed to:', departmentId);
  };

  const handleSortChange = (sortId: string) => {
    setSelectedSort(sortId);
    console.log('Sort changed to:', sortId);
  };

  return (
    <div className="h-full overflow-y-auto p-6 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6 w-full pb-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">전문병원 찾기</h1>
              <p className="text-sm text-gray-600">협진 가능한 전문병원과 의료진을 찾아보세요</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
            <span className="text-sm font-medium text-blue-700">연결된 병원: 4개</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            {/* Search Input */}
            <div className="md:col-span-1">
              <SearchInput
                placeholder="병원명 또는 지역을 입력하세요"
                value={searchQuery}
                onChange={handleSearch}
                onSearch={handleSearch}
                className="w-full"
              />
            </div>

            {/* Department Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">진료과</label>
              <Dropdown
                options={departmentOptions}
                selectedOption={selectedDepartment}
                onOptionSelect={handleDepartmentChange}
                placeholder="진료과 선택"
              />
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">정렬</label>
              <Dropdown
                options={sortOptions}
                selectedOption={selectedSort}
                onOptionSelect={handleSortChange}
                placeholder="정렬 기준"
              />
            </div>
          </div>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>

        {/* No Results Message */}
        {hospitals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-600">다른 검색어나 필터를 시도해보세요</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalDirectory;
