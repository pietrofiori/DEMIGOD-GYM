import { columnsMaquinas } from "@/DataTable-shadcn/ColumnsMaquina";
import { DataTable } from "@/DataTable-shadcn/data-tableMaquinas";
import { useMaquinas } from "@/components/maquinas/MaquinasContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function MaquinasPage() {
  const columnsmaquinas = columnsMaquinas;
  const { maquinas } = useMaquinas();
  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Máquinas</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsmaquinas} data={maquinas} />
      </ScrollArea>
    </div>
  );
}
