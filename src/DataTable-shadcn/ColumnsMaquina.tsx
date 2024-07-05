"use client";
import { Button } from "@/components/ui/button";
import DeleteClient from "@/components/clients/DeleteClient";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Pencil, Trash2 } from "lucide-react";
import { ClientsInterface } from "@/components/clients/ClientsContext";
import CardCreateClient from "@/components/clients/CardCreateClient";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { MaquinasInterface } from "@/components/maquinas/MaquinasContext";
import CardCreateMaquinas from "@/components/maquinas/CardCreateMaquinas";
import DeleteMaquina from "@/components/maquinas/DeleteMaquinas";
// criar contexto de clients
export const columnsMaquinas: ColumnDef<MaquinasInterface>[] = [
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
        >
          Nome da  Máquina {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "musculo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Músculo {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "maquinas",
    header: "Opções",
    cell: ({ row }) => {
      const maquinas = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false); 
      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateMaquinas maquina={maquinas} isUpdate={true} 
                onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
          <DeleteMaquina id={maquinas.id} />
        </div>
      );
    },
  },
];
