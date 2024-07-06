import React, { useEffect } from "react";
import { columnsClients } from "@/DataTable-shadcn/ColumnsClients";
import { useClients } from "@/components/clients/ClientsContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tabelClientes";
import { host } from "@/App";
export default function ClientsPage() {
  const columnsclients = columnsClients; // Certifique-se de que ColumnsActions esteja correto
  const { clients, setClients } = useClients();

  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Alunos</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsclients} data={clients} />
      </ScrollArea>
    </div>
  );
}
