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
import { PlanosInterface } from "./PlanosContext";
import { host } from "@/App";
import { usePlanos } from "./PlanosContext";
  
  interface DeletePlanosProps {
    id: number;
  }
  
  export default function DeletePlano({ id }: DeletePlanosProps) {
    const {deletePlanos} = usePlanos()
    const handleDeletePlano = async () => {
      try {
        const response = await fetch(host + "Planos" + "/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = response;
        console.log("Dados retornados:", data);
  
        if (!response.ok) {
          throw new Error("Erro ao Deletar Plano");
        } else {
          deletePlanos(id);
          toast({
            description: "Plano deletado com sucesso",
          });
        }
      } catch (error) {
        console.error("Erro ao deletar Plano:", error);
        toast({
          variant: "destructive",
          description: "Ocorreu um erro ao deletar o Plano",
        });
      }
    };
  
    // const [instrutor] = useState<InstrutoresInterface[]>([]);
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
                Ao apertar em confirmar este plano será deletado
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeletePlano}>Confirmar</AlertDialogAction>
              {/* <AlertDialogAction onClick={handleDeleteClient}>Confirmar</AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }
  