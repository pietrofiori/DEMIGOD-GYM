import React, { useEffect } from "react";
import { columnsFilial } from "@/DataTable-shadcn/ColumnsFiliais";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tableFiliais";
import { host } from "@/App";
import { useFiliais } from "@/components/filiais/FiliaisContext";
export default function FiliaisPage() {
  const columnsfilial = columnsFilial; // Certifique-se de que ColumnsActions esteja correto
  const { filiais } = useFiliais();

  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
      <h1 className="text-3xl">Filiais</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsfilial} data={filiais} />
      </ScrollArea>
    </div>
  );
}
