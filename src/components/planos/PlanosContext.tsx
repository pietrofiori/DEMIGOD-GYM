import React, { createContext, useState, useContext, ReactNode } from "react";


export interface PlanosInterface {
  id: number;
  nome: string;
  preco: string;

}

interface PlanosInterfaceType {
  planos: PlanosInterface[];
  setPlanos: React.Dispatch<React.SetStateAction<PlanosInterface[]>>;
  updatePlanos: (planos: PlanosInterface) => void;
  deletePlanos: (id: number) => void;
  clearPlanos: () => void;
}
const PlanosContext = createContext<PlanosInterfaceType | undefined>(
  undefined
);

export const PlanoProvider = ({ children }: { children: ReactNode }) => {
  const [planos, setPlanos] = useState<PlanosInterface[]>([]);

  const updatePlanos = (plano: PlanosInterface) => {
    setPlanos((prevPlanos) => [...prevPlanos, plano]);
  };

  const clearPlanos = () => {
    setPlanos([]);
  };

  const deletePlanos = (id: number) => {
    setPlanos((prevPlanos) =>
        prevPlanos.filter((plano) => plano.id !== id)
    );
  };
  return (
    <PlanosContext.Provider
      value={{ planos, setPlanos, updatePlanos, clearPlanos, deletePlanos }}
    >
      {children}
    </PlanosContext.Provider>
  );
};

export const usePlanos = (): PlanosInterfaceType => {
  const context = useContext(PlanosContext);
  if (context === undefined) {
    throw new Error("usePlanos must be used within a clientProvider");
  }

  return context;
};
