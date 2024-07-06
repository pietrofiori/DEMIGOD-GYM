import { columnsPlanos } from "@/DataTable-shadcn/ColumnsPlanos";
import { usePlanos } from "@/components/planos/PlanosContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tablePlanos";

export default function PlanosPage() {
  const columnsplanos = columnsPlanos;
  const { planos } = usePlanos();
  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Planos</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsplanos} data={planos} />
      </ScrollArea>
    </div>
  );
}
