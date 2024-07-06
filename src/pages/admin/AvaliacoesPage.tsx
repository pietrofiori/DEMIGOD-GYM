import React, { useEffect } from "react";
import { columnsAvaiacao } from "@/DataTable-shadcn/ColumnsAvaliacoes";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tableAvaliacoes";
import { host } from "@/App";
import { useAvaliacoes } from "@/components/avaliacoes/AvaliacoesContext";
export default function AvaliacoesPage() {
  const columnsavaliacao = columnsAvaiacao; // Certifique-se de que ColumnsActions esteja correto
  const { avaliacoes } = useAvaliacoes();
  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
      <h1 className="text-3xl">Avaliações</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsavaliacao} data={avaliacoes} />
      </ScrollArea>
    </div>
  );
}
