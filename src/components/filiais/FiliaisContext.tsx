import React, { createContext, useState, useContext, ReactNode } from "react";

export interface FilialInterface {
  id: number;
  endereco: string;
}

interface FilialContextType {
  filiais: FilialInterface[];
  setFiliais: React.Dispatch<React.SetStateAction<FilialInterface[]>>;
  addFilial: (filial: FilialInterface) => void;
  deleteFilial: (id: number) => void;
  clearFiliais: () => void;
}

const FilialContext = createContext<FilialContextType | undefined>(undefined);

export const FilialProvider = ({ children }: { children: ReactNode }) => {
  const [filiais, setFiliais] = useState<FilialInterface[]>([]);

  const addFilial = (filial: FilialInterface) => {
    setFiliais((prevFiliais) => [...prevFiliais, filial]);
  };

  const deleteFilial = (id: number) => {
    setFiliais((prevFiliais) =>
      prevFiliais.filter((filial) => filial.id !== id)
    );
  };

  const clearFiliais = () => {
    setFiliais([]);
  };

  return (
    <FilialContext.Provider
      value={{ filiais, setFiliais, addFilial, deleteFilial, clearFiliais }}
    >
      {children}
    </FilialContext.Provider>
  );
};

export const useFiliais = (): FilialContextType => {
  const context = useContext(FilialContext);
  if (context === undefined) {
    throw new Error("useFiliais must be used within a FilialProvider");
  }
  return context;
};
