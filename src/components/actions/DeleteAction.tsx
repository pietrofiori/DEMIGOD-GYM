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
  interface Actions {
    id: string;
    name: string;
    start_type: string;
    prt: string;
    alarm_code: string;
    user: string;
    device: string;
  }
  interface DeleteActionsProps {
    id: string;
  }

  export default function DeleteActions({ id }: DeleteActionsProps){
    const [actions] = useState<Actions[]>([]);
    const {toast} = useToast()

    return(
      <div>
        Deletar ações
      </div>
        // <AlertDialog>
        //     <AlertDialogTrigger>
        //       <Button variant="ghost" size="icon">
        //         <Trash2 size={23} />
        //       </Button>
        //     </AlertDialogTrigger>
        //     <AlertDialogContent>
        //       <AlertDialogHeader>
        //         <AlertDialogTitle>Voce tem certeza?</AlertDialogTitle>
        //         <AlertDialogDescription>
        //           Ao apertar em confirmar este usuário será deletado
        //         </AlertDialogDescription>
        //       </AlertDialogHeader>
        //       <AlertDialogFooter>
        //         <AlertDialogCancel>Cancelar</AlertDialogCancel>
        //         <AlertDialogAction onClick={handleDelete}>Confirmar</AlertDialogAction>
        //       </AlertDialogFooter>
        //     </AlertDialogContent>
        //   </AlertDialog>
    )
  }