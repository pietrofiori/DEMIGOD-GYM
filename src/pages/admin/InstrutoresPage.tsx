import { columnsInstrutor } from "@/DataTable-shadcn/ColumnsInstrutor";
import { useInstrutores } from "@/components/instrutores/InstrutoresContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tableInstrutor";

export default function InstrutoresPage() {
  const columnsinstrutor = columnsInstrutor; 
  const { instrutores } = useInstrutores();
  return (
    // fazer o fetch na api para consultar os clientes
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsinstrutor} data={instrutores} />
      </ScrollArea>
    </div>
  );
  }