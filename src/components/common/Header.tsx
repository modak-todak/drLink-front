import { FiHome } from 'react-icons/fi';
import { useAccount } from '../../contexts/AccountContext';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header = ({ title = 'Dr.Link', subtitle = '지역의료기관 전문의 협진 관리 시스템' }: HeaderProps) => {
  const { toggleAccountType, isHospitalAccount } = useAccount();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Account Type Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleAccountType}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                isHospitalAccount
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-green-50 border-green-200 text-green-700'
              }`}
            >
              {isHospitalAccount ? (
                <>
                  <FiHome className="w-4 h-4" />
                  <span className="text-sm font-medium">전문병원</span>
                </>
              ) : (
                <>
                  <FiHome className="w-4 h-4" />
                  <span className="text-sm font-medium">보건소</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
