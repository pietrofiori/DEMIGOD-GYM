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
  import { AccountInterface } from "./AccountContext";
  import { host } from "@/App";
  import { useAccounts } from "./AccountContext";
  
  interface DeleteAccountProps {
    id: number;
  }
  
  export default function DeleteAccount({ id }: DeleteAccountProps) {
    const { deleteAccount } = useAccounts();
    const { toast } = useToast();
  
    const handleDeleteAccount = async () => {
      try {
        const response = await fetch(`${host}Contas/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Erro ao deletar conta");
        } else {
          deleteAccount(id);
          toast({
            description: "Conta deletada com sucesso",
          });
        }
      } catch (error) {
        console.error("Erro ao deletar conta:", error);
        toast({
          variant: "destructive",
          description: "Ocorreu um erro ao deletar a conta",
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
                Ao apertar em confirmar esta conta será deletada
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount}>
                Confirmar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }
  