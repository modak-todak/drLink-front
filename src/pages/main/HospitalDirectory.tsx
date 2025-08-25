import React, { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchInput, LabeledDropdown, type DropdownOption } from '../../components/common';
import { HospitalCard, type HospitalCardProps } from '../../components/hospitalDirectory';
import { useNavigate } from 'react-router-dom';
import { mockHospitals, mockDepartmentFilterOptions, mockSortOptions } from '../../data/mockData';

const HospitalDirectory: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedSort, setSelectedSort] = useState('distance');

  // 드롭다운 옵션들 - 목업 데이터 사용
  const departmentOptions: DropdownOption[] = mockDepartmentFilterOptions;
  const sortOptions: DropdownOption[] = mockSortOptions;

  // 병원 데이터 - 목업 데이터 사용
  const allHospitals: HospitalCardProps[] = mockHospitals.map((hospital) => ({
    ...hospital,
    onViewDetails: () => console.log(`${hospital.name} 상세정보`),
  }));

  // 필터링된 병원 목록
  const filteredHospitals = useMemo(() => {
    let filtered = allHospitals;

    // 검색어 필터링
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (hospital) =>
          hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hospital.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // 진료과 필터링
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter((hospital) => hospital.department === selectedDepartment);
    }

    return filtered;
  }, [searchQuery, selectedDepartment]);

  // 정렬된 병원 목록
  const sortedHospitals = useMemo(() => {
    const sorted = [...filteredHospitals];

    switch (selectedSort) {
      case 'distance':
        return sorted.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'time':
        return sorted.sort((a, b) => parseInt(a.averageTime) - parseInt(b.averageTime));
      case 'doctors':
        return sorted.sort((a, b) => b.availableDoctors - a.availableDoctors);
      default:
        return sorted;
    }
  }, [filteredHospitals, selectedSort]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDepartmentChange = (departmentId: string) => {
    setSelectedDepartment(departmentId);
  };

  const handleSortChange = (sortId: string) => {
    setSelectedSort(sortId);
  };

  return (
    <div className="h-full overflow-y-auto p-6 w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6 w-full pb-6">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            {/* Search Input */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">병원명 또는 지역 검색</label>
              <SearchInput
                placeholder="병원명 또는 지역을 입력하세요"
                value={searchQuery}
                onChange={handleSearch}
                onSearch={handleSearch}
                className="w-full"
              />
            </div>

            {/* Department Dropdown */}
            <LabeledDropdown
              label="진료과"
              options={departmentOptions}
              selectedOption={selectedDepartment}
              onOptionSelect={handleDepartmentChange}
              placeholder="진료과 선택"
            />

            {/* Sort Dropdown */}
            <LabeledDropdown
              label="정렬"
              options={sortOptions}
              selectedOption={selectedSort}
              onOptionSelect={handleSortChange}
              placeholder="정렬 기준"
            />
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            총 <span className="font-medium text-gray-900">{sortedHospitals.length}개</span>의 병원이 검색되었습니다
          </p>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sortedHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              {...hospital}
              onRequestCollaboration={() => navigate(`/consultation/consultation-request?hospitalId=${hospital.id}`)}
            />
          ))}
        </div>

        {/* No Results Message */}
        {sortedHospitals.length === 0 && (
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
