"use client";
import { Button } from "@/components/ui/button";
import DeleteClient from "@/components/clients/DeleteClient";
import UpdateActions from "@/components/actions/UpdateActions";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Pencil, Trash2 } from "lucide-react";
import { ClientsInterface } from "@/components/clients/ClientsContext";
import CardCreateClient from "@/components/clients/CardCreateClient";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// criar contexto de clients
export const columnsClients: ColumnDef<ClientsInterface>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome Completo {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cpf",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CPF {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "sexo",
    header: "Sexo",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },

  {
    accessorKey: "cep",
    header: "CEP",
  },
  {
    id: "clients",
    header: "Opções",
    cell: ({ row }) => {
      const clients = row.original;

      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateClient client={clients} isUpdate={true} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
          <DeleteClient id={clients.id} />
        </div>
      );
    },
  },
];
