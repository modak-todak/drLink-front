import React, { createContext, useContext, useState, type ReactNode } from 'react';

type AccountType = 'hospital' | 'healthCenter';

interface AccountContextType {
  accountType: AccountType;
  toggleAccountType: () => void;
  isHospitalAccount: boolean;
  isHealthCenterAccount: boolean;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
};

interface AccountProviderProps {
  children: ReactNode;
}

export const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const [accountType, setAccountType] = useState<AccountType>('healthCenter');

  const toggleAccountType = () => {
    setAccountType((prev) => (prev === 'hospital' ? 'healthCenter' : 'hospital'));
  };

  const value: AccountContextType = {
    accountType,
    toggleAccountType,
    isHospitalAccount: accountType === 'hospital',
    isHealthCenterAccount: accountType === 'healthCenter',
  };

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};
