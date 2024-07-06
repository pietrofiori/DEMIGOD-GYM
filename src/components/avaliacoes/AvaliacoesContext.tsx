import React, { createContext, useState, useContext, ReactNode } from "react";

export interface AvaliacaoInterface {
  id: number;
  alunoId: number;
  instrutorId: number;
  nomeSala: string;
  horario: Date;
}

interface AvaliacaoContextType {
  avaliacoes: AvaliacaoInterface[];
  setAvaliacoes: React.Dispatch<React.SetStateAction<AvaliacaoInterface[]>>;
  updateAvaliacao: (avaliacao: AvaliacaoInterface) => void;
  updateSpecificAvaliacao: (avaliacao: AvaliacaoInterface) => void;
  deleteAvaliacao: (id: number) => void;
  clearAvaliacoes: () => void;
}

const AvaliacaoContext = createContext<AvaliacaoContextType | undefined>(undefined);

export const AvaliacaoProvider = ({ children }: { children: ReactNode }) => {
  const [avaliacoes, setAvaliacoes] = useState<AvaliacaoInterface[]>([]);

  const updateAvaliacao = (avaliacao: AvaliacaoInterface) => {
    setAvaliacoes((prevAvaliacoes) => [...prevAvaliacoes, avaliacao]);
  };

  const updateSpecificAvaliacao = (updatedAvaliacao: AvaliacaoInterface) => {
    setAvaliacoes((prevAvaliacoes) =>
      prevAvaliacoes.map((avaliacao) =>
        avaliacao.id === updatedAvaliacao.id ? updatedAvaliacao : avaliacao
      )
    );
  };

  const clearAvaliacoes = () => {
    setAvaliacoes([]);
  };

  const deleteAvaliacao = (id: number) => {
    setAvaliacoes((prevAvaliacoes) =>
      prevAvaliacoes.filter((avaliacao) => avaliacao.id !== id)
    );
  };

  return (
    <AvaliacaoContext.Provider
      value={{ avaliacoes, setAvaliacoes, updateAvaliacao, updateSpecificAvaliacao, clearAvaliacoes, deleteAvaliacao }}
    >
      {children}
    </AvaliacaoContext.Provider>
  );
};

export const useAvaliacoes = (): AvaliacaoContextType => {
  const context = useContext(AvaliacaoContext);
  if (context === undefined) {
    throw new Error("useAvaliacoes must be used within an AvaliacaoProvider");
  }
  return context;
};
