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
  import { Trash2 } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import React from "react";
  import { host } from "@/App";
  import { useMaquinas } from "./MaquinasContext";
  import { useToast } from "@/components/ui/use-toast";
  
  interface DeleteMaquinaProps {
    id: number;
  }
  
  export default function DeleteMaquina({ id }: DeleteMaquinaProps) {
    const { deleteMaquinas } = useMaquinas();
    const { toast } = useToast();
  
    const handleDeleteMaquina = async () => {
      try {
        const response = await fetch(`${host}Maquinas/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Erro ao Deletar Maquina");
        } else {
          deleteMaquinas(id);
          toast({
            description: "Maquina deletada com sucesso",
          });
        }
      } catch (error) {
        console.error("Erro ao deletar Maquina:", error);
        toast({
          variant: "destructive",
          description: "Ocorreu um erro ao deletar a Maquina",
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
                Ao apertar em confirmar esta maquina será deletada
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteMaquina}>
                Confirmar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }
  