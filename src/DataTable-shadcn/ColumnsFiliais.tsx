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
import { FilialInterface } from "@/components/filiais/FiliaisContext";
import CardCreateFilial from "@/components/filiais/CardCreateFiliais";
import DeleteFilial from "@/components/filiais/DeleteFiliais";
// criar contexto de clients
export const columnsFilial: ColumnDef<FilialInterface>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "endereco",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Endereço {/*Ajustar text*/}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  
  {
    id: "accounts",
    header: "Opções",
    cell: ({ row }) => {
      const filial = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false); 
      return (
        <div className="flex justify-center gap-1 items-center">
           {/* ATUALIZAR*/}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
              <Pencil />
            </DialogTrigger>
            <DialogContent>
              <CardCreateFilial endereco={filial.endereco} isUpdate={true} 
                onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          {/* DELETAR*/}
          <DeleteFilial id={filial?.id } />
        </div>
      );
    },
  },
];
