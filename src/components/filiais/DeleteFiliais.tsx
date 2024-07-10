import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { host } from "@/App";

interface DeleteFilialProps {
  id: number;
}

export default function DeleteFilial({ id }: DeleteFilialProps) {
  const { toast } = useToast();

  const handleDeleteFilial = async () => {
    try {
      const response = await fetch(`${host}filiais/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar filial");
      } else {
        toast({
          description: "Filial deletada com sucesso",
        });
      }
    } catch (error) {
      console.error("Erro ao deletar filial:", error);
      toast({
        variant: "destructive",
        description: "Ocorreu um erro ao deletar a filial",
      });
    }
  };

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
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao apertar em confirmar esta filial será deletada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteFilial}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
