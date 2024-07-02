"use client";
import { Button } from "@/components/ui/button";
import DeleteClient from "@/components/clients/DeleteClient";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Pencil, Trash2 } from "lucide-react";
import { InstrutoresInterface } from "@/components/instrutores/InstrutoresContext";
import CardCreateClient from "@/components/clients/CardCreateClient";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DeleteInstrutor from "@/components/instrutores/DeleteInstrutor";
import CardCreateInstrutor from "@/components/instrutores/CardCreateInstrutor";
// criar contexto de Instrutor
export const columnsInstrutor: ColumnDef<InstrutoresInterface>[] = [
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
    id: "instrutor",
    header: "Opções",
    cell: ({ row }) => {
      const instrutor = row.original;

      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateInstrutor instrutor={instrutor} isUpdate={true} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
            <DeleteInstrutor id={instrutor.id}/>
        </div>
      );
    },
  },
];
