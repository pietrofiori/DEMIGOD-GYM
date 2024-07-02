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
import CardCreatePlanos from "@/components/planos/CardCreatePlanos";
import DeletePlano from "@/components/planos/DeletePlanos";
import { ModalidadesInterface } from "@/components/modalidades/ModalidadesContext";
import CardCreateModalidades from "@/components/modalidades/CardCreateModalidades";
import DeleteModalidade from "@/components/modalidades/DeleteModalidades";
// criar contexto de Instrutor
export const columnsModalidades: ColumnDef<ModalidadesInterface>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >Nome da Modalidade{/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "preco",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Preço {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "modalidades",
    header: "Opções",
    cell: ({ row }) => {
      const modalidade = row.original;

      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateModalidades modalidade={modalidade} isUpdate={true} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
            <DeleteModalidade id={modalidade.id}/>
        </div>
      );
    },
  },
];
