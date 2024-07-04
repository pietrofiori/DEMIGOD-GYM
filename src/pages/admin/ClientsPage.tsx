import React, { useEffect } from "react";
import { columnsClients } from "@/DataTable-shadcn/ColumnsClients";
import { useClients } from "@/components/clients/ClientsContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tabelClientes";
import { host } from "@/App";
export default function ClientsPage() {
  const columnsclients = columnsClients; // Certifique-se de que ColumnsActions esteja correto
  const { clients, setClients } = useClients();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(host + "Clientes/getzao");
        if (!response.ok) {
          throw new Error("Erro ao buscar clientes");
        }
        const data = await response.json();
        console.log("Consultou Clientes")
        setClients(data.clientes)
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClients();
  }, [setClients]);

  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsclients} data={clients} />
      </ScrollArea>
    </div>
  );
}
