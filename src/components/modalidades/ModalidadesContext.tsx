import React, { createContext, useState, useContext, ReactNode } from "react";


export interface ModalidadesInterface {
  id: number;
  nome: string;
  preco: string;

}

interface ModalidadesInterfaceType {
  modalidades: ModalidadesInterface[];
  setModalidades: React.Dispatch<React.SetStateAction<ModalidadesInterface[]>>;
  updateModalidades: (modalidades: ModalidadesInterface) => void;
  updateSpecificModalidade: (modalidades: ModalidadesInterface) => void;
  deleteModalidades: (id: number) => void;
  clearModalidades: () => void;
}
const ModalidadesContext = createContext<ModalidadesInterfaceType | undefined>(
  undefined
);

export const ModalidadeProvider = ({ children }: { children: ReactNode }) => {
  const [modalidades, setModalidades] = useState<ModalidadesInterface[]>([]);

  const updateModalidades = (modalidade: ModalidadesInterface) => {
    setModalidades((prevModalidades) => [...prevModalidades, modalidade]);
  };

  const updateSpecificModalidade = (updatedModalidade: ModalidadesInterface) => {
    setModalidades((prevModalidades) =>
      prevModalidades.map((modalidades) =>
        modalidades.id === updatedModalidade.id ? updatedModalidade : modalidades
      )
    );
  };
  const clearModalidades = () => {
    setModalidades([]);
  };

  const deleteModalidades = (id: number) => {
    setModalidades((prevModalidades) =>
        prevModalidades.filter((modalidade) => modalidade.id !== id)
    );
  };
  return (
    <ModalidadesContext.Provider
      value={{ modalidades, setModalidades, updateModalidades, updateSpecificModalidade, clearModalidades, deleteModalidades }}
    >
      {children}
    </ModalidadesContext.Provider>
  );
};

export const useModalidades = (): ModalidadesInterfaceType => {
  const context = useContext(ModalidadesContext);
  if (context === undefined) {
    throw new Error("useModalidades must be used within a clientProvider");
  }

  return context;
};
