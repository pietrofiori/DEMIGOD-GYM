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
import { host } from "@/App";
import { useClients } from "./ClientsContext";

interface DeleteClientProps {
  id: number;
}

export default function DeleteClient({ id }: DeleteClientProps) {
  const {deleteClients} = useClients()
  const handleDeleteClient = async () => {
    try {
      const response = await fetch(host + "Clientes" + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response
      console.log("Dados retornados:", data); 

      if (!response.ok) {
         throw new Error("Erro ao Deletar cliente");
       }else{
        deleteClients(id)
      toast({
        description: "Cliente deletado com sucesso",
      });
       }


    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
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
              Ao apertar em confirmar este aluno será deletado
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteClient}>
              Confirmar
            </AlertDialogAction>
            {/* <AlertDialogAction onClick={handleDeleteClient}>Confirmar</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
