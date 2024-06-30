"use client";
import { Button } from "@/components/ui/button";
import DeleteActions from "@/components/actions/DeleteAction";
import UpdateActions from "@/components/actions/UpdateActions";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Pencil } from "lucide-react";
import { ClientsInterface } from "@/components/clients/ClientsContext";
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
        )
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
        )
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
      header: "Clients",
      cell: ({ row }) => {
        const actions = row.original;
  
        return (
          <div className="flex justify-center gap-1 items-center">
            {/* <UpdateActions action={actions}/>
            <DeleteActions id={actions.id}/> */}
          </div>
        );
      },
    },
  ];
  
  