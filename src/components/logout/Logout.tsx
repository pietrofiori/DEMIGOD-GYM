import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
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
} from "@/components/ui/alert-dialog"; // Importe o useWebSocketData
import texts from "@/_data/texts.json";


export default function Logout() {
  const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.clear();
    // if (ws) {
    //   ws.closeConnection(); // fecha a conexão WebSocket
    // }
    navigate("/login");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="ghost">Sair</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Voce tem certeza? 
          </AlertDialogTitle>
          <AlertDialogDescription>
            ao clicar em confirmar você será deslogado do aplicativo
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild >
            <a onClick={handleLogout}>Sair</a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
