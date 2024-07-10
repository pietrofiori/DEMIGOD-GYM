import React, { createContext, useState, useContext, ReactNode } from "react";

export interface AccountInterface {
  id: number;
  login: string;
  senha: string;
  nome: string;
  cpf: string;
  email: string;
  sexo: string;
  telefone: string;
  cep: string; 
  idade: number;
  filialId: number;
}

interface AccountContextType {
  accounts: AccountInterface[];
  setAccounts: React.Dispatch<React.SetStateAction<AccountInterface[]>>;
  updateAccount: (account: AccountInterface) => void;
  updateSpecificAccount: (account: AccountInterface) => void;
  deleteAccount: (id: number) => void;
  clearAccounts: () => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState<AccountInterface[]>([]);

  const updateAccount = (account: AccountInterface) => {
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

  const updateSpecificAccount = (updatedAccount: AccountInterface) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === updatedAccount.id ? updatedAccount : account
      )
    );
  };

  const clearAccounts = () => {
    setAccounts([]);
  };

  const deleteAccount = (id: number) => {
    setAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account.id !== id)
    );
  };

  return (
    <AccountContext.Provider
      value={{ accounts, setAccounts, updateAccount, updateSpecificAccount, clearAccounts, deleteAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccounts = (): AccountContextType => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccounts must be used within an AccountProvider");
  }
  return context;
};
