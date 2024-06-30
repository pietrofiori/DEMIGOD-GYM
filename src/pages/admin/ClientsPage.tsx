import { columnsClients } from "@/DataTable-shadcn/ColumnsClients";
import { useClients } from "@/components/clients/ClientsContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tabelClientes";
export default function ClientsPage() {
  //const [actions, setActions] = useState<ActionsInteface[]>([]);
  const columnsclients = columnsClients; // Certifique-se de que ColumnsActions esteja correto
  const { clients } = useClients();
  return (
    <div className="px-2 flex flex-col gap-4 justify-center mx-[250px]">
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsclients} data={clients} />
      </ScrollArea>
    </div>
  );
}
