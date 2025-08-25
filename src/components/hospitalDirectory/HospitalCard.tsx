import React from 'react';
import { FiMapPin, FiClock, FiStar, FiInfo } from 'react-icons/fi';
import { Card, Button } from '../common';

export interface HospitalCardProps {
  id: string;
  name: string;
  image?: string;
  location: string;
  distance: string;
  averageTime: string;
  availableDoctors: number;
  rating: number;
  specialties: string[];
  collaborationMethods: string[];
  department?: string;
  onRequestCollaboration?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  name,
  image,
  location,
  distance,
  averageTime,
  availableDoctors,
  rating,
  specialties,
  collaborationMethods,
  onRequestCollaboration,
  onViewDetails,
  className = '',
}) => {
  return (
    <Card type="content" variant="default" className={className}>
      {/* Hospital Image and Basic Info */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs">병원</span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>

          {/* Location and Distance */}
          <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
            <FiMapPin className="w-4 h-4" />
            <span>
              {location} • {distance}
            </span>
          </div>

          {/* Time and Doctors */}
          <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
            <FiClock className="w-4 h-4" />
            <span>
              평균 {averageTime} • 가능한 의사 {availableDoctors}명
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">주요 전문분야</h4>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-md"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Collaboration Methods */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">협진 방법</h4>
        <div className="flex flex-wrap gap-2">
          {collaborationMethods.map((method, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-md"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        <Button
          type="primary"
          color="blue"
          onClick={onRequestCollaboration || (() => {})}
          className="flex-1"
          disabled={!onRequestCollaboration}
        >
          협진 요청하기
        </Button>
        <Button type="secondary" color="blue" icon={<FiInfo />} onClick={onViewDetails} className="px-3">
          <span className="sr-only">상세정보</span>
        </Button>
      </div>
    </Card>
  );
};

export default HospitalCard;
