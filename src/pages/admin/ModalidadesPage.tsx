import { columnsModalidades } from "@/DataTable-shadcn/ColumnsModalidade";
import { DataTable } from "@/DataTable-shadcn/data-tableModalidade";
import { useModalidades } from "@/components/modalidades/ModalidadesContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function ModalidadesPage() {
  const columnsmodalidades = columnsModalidades;
  const { modalidades } = useModalidades();
  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Modalidades</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsmodalidades} data={modalidades} />
      </ScrollArea>
    </div>
  );
}
