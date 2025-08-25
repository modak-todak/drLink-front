interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header = ({ title = 'Dr.Link', subtitle = '지역의료기관 전문의 협진 관리 시스템' }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">온라인</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
