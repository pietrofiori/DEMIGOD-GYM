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
import { AccountInterface } from "@/components/account/AccountContext";
import CardCreateAccount from "@/components/account/CardCreateAccount";
import DeleteAccount from "@/components/account/DeleteAccount";
import CardCreateAvaliacao from "@/components/avaliacoes/CardCreateAvaliacoes";
import { AvaliacaoInterface } from "@/components/avaliacoes/AvaliacoesContext";
// criar contexto de clients
export const columnsAvaiacao: ColumnDef<AvaliacaoInterface>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nomeSala",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome da Sala{/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "horario",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Horário {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "accounts",
    header: "Opções",
    cell: ({ row }) => {
      const avaliacoes = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false); 
      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateAvaliacao avaliacao={avaliacoes} isUpdate={true} 
                onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
          <DeleteAccount id={avaliacoes.id} />
        </div>
      );
    },
  },
];
