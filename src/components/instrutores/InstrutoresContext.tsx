import React, { createContext, useState, useContext, ReactNode } from "react";


export interface InstrutoresInterface {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  sexo: string;
  telefone: string;
  cep: string; // o ? significa que o valor nao precisa ser presente , se for nulo nao tem problema

}

interface InstrutoresInterfaceType {
  instrutores: InstrutoresInterface[];
  setInstrutores: React.Dispatch<React.SetStateAction<InstrutoresInterface[]>>;
  updateInstrutores: (instrutor: InstrutoresInterface) => void;
  deleteInstrutores: (id: number) => void;
  clearInstrutores: () => void;
}
const instrutoresContext = createContext<InstrutoresInterfaceType | undefined>(
  undefined
);

export const InstrutorProvider = ({ children }: { children: ReactNode }) => {
  const [instrutores, setInstrutores] = useState<InstrutoresInterface[]>([]);

  const updateInstrutores = (instrutor: InstrutoresInterface) => {
    setInstrutores((prevInstrutores) => [...prevInstrutores, instrutor]);
  };

  const clearInstrutores = () => {
    setInstrutores([]);
  };

  const deleteInstrutores = (id: number) => {
    setInstrutores((previnstrutores) =>
        previnstrutores.filter((instrutor) => instrutor.id !== id)
    );
  };
  return (
    <instrutoresContext.Provider
      value={{ instrutores, setInstrutores, updateInstrutores, clearInstrutores, deleteInstrutores }}
    >
      {children}
    </instrutoresContext.Provider>
  );
};

export const useInstrutores = (): InstrutoresInterfaceType => {
  const context = useContext(instrutoresContext);
  if (context === undefined) {
    throw new Error("useinstrutores must be used within a clientProvider");
  }

  return context;
};
