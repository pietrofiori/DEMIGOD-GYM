import React, { useContext } from "react";
import { useAccount } from "@/components/account/AccountContext";
import { initialState } from "@/components/account/AccountContext";
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
import { useLanguage } from "@/components/language/LanguageContext";

export default function Logout() {
  const navigate = useNavigate();

  const { language } = useLanguage();

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
        <Button variant="ghost">{texts[language].logoutButton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {texts[language].logoutConfirmation}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {texts[language].logoutDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{texts[language].cancel}</AlertDialogCancel>
          <AlertDialogAction asChild >
            <a onClick={handleLogout}>{texts[language].logout}</a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
