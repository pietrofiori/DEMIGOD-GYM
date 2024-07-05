import React, { createContext, useState, useContext, ReactNode } from "react";

export interface MaquinasInterface {
  id: number;
  nome: string;
  musculo: string;
}

interface MaquinasInterfaceType {
  maquinas: MaquinasInterface[];
  setMaquinas: React.Dispatch<React.SetStateAction<MaquinasInterface[]>>;
  updateMaquinas: (maquinas: MaquinasInterface) => void;
  updateSpecificMaquina: (maquinas: MaquinasInterface) => void;
  deleteMaquinas: (id: number) => void;
  clearMaquinas: () => void;
}

const MaquinasContext = createContext<MaquinasInterfaceType | undefined>(undefined);

export const MaquinasProvider = ({ children }: { children: ReactNode }) => {
  const [maquinas, setMaquinas] = useState<MaquinasInterface[]>([]);

  const updateMaquinas = (maquina: MaquinasInterface) => {
    setMaquinas((prevMaquinas) => [...prevMaquinas, maquina]);
  };

  const updateSpecificMaquina = (updatedMaquina: MaquinasInterface) => {
    setMaquinas((prevMaquinas) =>
      prevMaquinas.map((maquinas) =>
        maquinas.id === updatedMaquina.id ? updatedMaquina : maquinas
      )
    );
  };

  const clearMaquinas = () => {
    setMaquinas([]);
  };

  const deleteMaquinas = (id: number) => {
    setMaquinas((prevMaquinas) =>
      prevMaquinas.filter((maquina) => maquina.id !== id)
    );
  };

  return (
    <MaquinasContext.Provider
      value={{ maquinas, setMaquinas, updateMaquinas, updateSpecificMaquina, clearMaquinas, deleteMaquinas }}
    >
      {children}
    </MaquinasContext.Provider>
  );
};

export const useMaquinas = (): MaquinasInterfaceType => {
  const context = useContext(MaquinasContext);
  if (context === undefined) {
    throw new Error("useMaquinas must be used within a MaquinasProvider");
  }

  return context;
};
