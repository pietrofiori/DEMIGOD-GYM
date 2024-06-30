import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState, ChangeEvent, useContext } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { ClientsInterface } from "./ClientsContext";

interface DeleteActionsProps {
  id: number;
}

export default function DeleteClient({ id }: DeleteActionsProps) {
  const handleDeleteClient = async () => {
    try {
      const response = await fetch("/api/DeleteClient (colocar aqui dps) ", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Colocar o Token aqui": "Token aqui",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao Deletar cliente");
      }

      toast({
        description: "Cliente deletado com sucesso",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Ocorreu um erro ao deletar o cliente",
      });
    }
  };

  const [clients] = useState<ClientsInterface[]>([]);
  const { toast } = useToast();

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="ghost" size="icon">
            <Trash2 size={23} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Voce tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao apertar em confirmar este usuário será deletado
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteClient}>Confirmar</AlertDialogAction>
            {/* <AlertDialogAction onClick={handleDeleteClient}>Confirmar</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
