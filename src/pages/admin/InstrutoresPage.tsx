import { columnsInstrutor } from "@/DataTable-shadcn/ColumnsInstrutor";
import { useInstrutores } from "@/components/instrutores/InstrutoresContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tableInstrutor";
import { useEffect } from "react";
import { host } from "@/App";

export default function InstrutoresPage() {
  const columnsinstrutor = columnsInstrutor; 
  const { instrutores, setInstrutores } = useInstrutores();

  return (
    // fazer o fetch na api para consultar os instrutor
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Instrutores</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsinstrutor} data={instrutores} />
      </ScrollArea>
    </div>
  );
  }