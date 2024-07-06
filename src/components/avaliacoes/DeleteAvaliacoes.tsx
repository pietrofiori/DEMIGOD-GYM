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
import { useAvaliacoes } from "./AvaliacoesContext";

interface DeleteAvaliacaoProps {
  id: number;
}

export default function DeleteAvaliacao({ id }: DeleteAvaliacaoProps) {
  const { deleteAvaliacao } = useAvaliacoes();
  const { toast } = useToast();

  const handleDeleteAvaliacao = async () => {
    try {
      const response = await fetch(`${host}Avaliacoes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar avaliação");
      } else {
        deleteAvaliacao(id);
        toast({
          description: "Avaliação deletada com sucesso",
        });
      }
    } catch (error) {
      console.error("Erro ao deletar avaliação:", error);
      toast({
        variant: "destructive",
        description: "Ocorreu um erro ao deletar a avaliação",
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
              Ao apertar em confirmar esta avaliação será deletada.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAvaliacao}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
