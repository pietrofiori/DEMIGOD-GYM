import React, { createContext, useState, useContext, ReactNode } from "react";


export interface ClientsInterface {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  sexo: string;
  telefone: string;
  cep: string; // o ? significa que o valor nao precisa ser presente , se for nulo nao tem problema
  idade: number;
  planoId?: number;

}

interface ClientsInterfaceType {
  clients: ClientsInterface[];
  setClients: React.Dispatch<React.SetStateAction<ClientsInterface[]>>;
  updateClients: (client: ClientsInterface) => void;
  updateSpecificClient: (client: ClientsInterface) => void;
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

  const updateSpecificClient = (updatedClient: ClientsInterface) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
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
      value={{ clients, setClients, updateClients, clearClients, deleteClients, updateSpecificClient, }}
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
