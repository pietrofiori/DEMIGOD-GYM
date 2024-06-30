import React, { createContext, useState, useContext, ReactNode } from "react";


export interface ClientsInterface {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  sexo: string;
  telefone: string;
  cep: string; // o ? significa que o valor nao precisa ser presente , se for nulo nao tem problema

}

interface ClientsInterfaceType {
  clients: ClientsInterface[];
  setClients: React.Dispatch<React.SetStateAction<ClientsInterface[]>>;
  updateClients: (client: ClientsInterface) => void;
  deleteClients: (id: number) => void;
  clearClients: () => void;
}
const ClientsContext = createContext<ClientsInterfaceType | undefined>(
  undefined
);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<ClientsInterface[]>([]);

  const updateClients = (client: ClientsInterface) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  const clearClients = () => {
    setClients([]);
  };

  const deleteClients = (id: number) => {
    setClients((prevClients) =>
        prevClients.filter((client) => client.id !== id)
    );
  };
  return (
    <ClientsContext.Provider
      value={{ clients, setClients, updateClients, clearClients, deleteClients }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = (): ClientsInterfaceType => {
  const context = useContext(ClientsContext);
  if (context === undefined) {
    throw new Error("useClients must be used within a clientProvider");
  }

  return context;
};
