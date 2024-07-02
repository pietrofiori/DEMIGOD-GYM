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
  import { InstrutoresInterface } from "./InstrutoresContext";
  
  interface DeleteInstrutorProps {
    id: number;
  }
  
  export default function DeleteInstrutor({ id }: DeleteInstrutorProps) {
    const handleDeleteInstrutor = async () => {
      try {
        const response = await fetch("/api/DeleteInstrutort (colocar aqui dps) ", {
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
          throw new Error("Erro ao Deletar Instrutor");
        }
  
        toast({
          description: "Instrutore deletado com sucesso",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Ocorreu um erro ao deletar o cliente",
        });
      }
    };
  
    const [instrutor] = useState<InstrutoresInterface[]>([]);
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
                Ao apertar em confirmar este instrutor será deletado
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteInstrutor}>Confirmar</AlertDialogAction>
              {/* <AlertDialogAction onClick={handleDeleteClient}>Confirmar</AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }
  