import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import LogoApp from "@/assets/logoApp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logout from "@/components/logout/Logout";
import { useAccount } from "@/components/account/AccountContext";
import { useNavigate } from "react-router-dom";

import { LanguageToggle } from "@/components/language/LanguageToggle";
import texts from "../../_data/texts.json";
import { useLanguage } from "../language/LanguageContext";

export default function HeaderApp() {
  const account = useAccount();

  const { updateAccount } = useAccount();
  const navigate = useNavigate();

  const { language } = useLanguage();

  const handlePlanosViewClick = () => {
    navigate("/admin/planos");
  };

  const handleInstrutoresViewClick = () => {
    navigate("/admin/instrutores");
  };
  const handleClientViewClick = () => {
    navigate("/admin/clients");
  };

  const handleModalidadesViewClick = () => {
    navigate("/admin/modalidades");
  };
  const handleAvaliacoesViewClick = () => {
    navigate("/admin/avaliacoes");
  };

  return (
    <header className="flex justify-between items-center p-2 mb-3">
      <div className="flex items-center gap-5">
        <img
          src={LogoApp} // Use o logo importado aqui
          alt="Logo"
          width={50}
          height={50}
          className="rounded-lg "
        />
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {account?.name || "Administrador"}
          </h3>
          <p className="text-sm text-muted-foreground">{account?.email}</p>
        </div>
      </div>

      <div className="flex items-end ">
        <div className="flex items-center gap-1">
          <Button variant="ghost" onClick={handleClientViewClick}>
            Clientes
          </Button>
          <Button variant="ghost" onClick={handleInstrutoresViewClick}>
            Instrutores
          </Button>
          <Button variant="ghost" onClick={handlePlanosViewClick}>
            Planos
          </Button>
          <Button variant="ghost" onClick={handleModalidadesViewClick}>
            Modalidades
          </Button>
          <Button variant="ghost" onClick={handleAvaliacoesViewClick}>
            Avaliações Físicas
          </Button>

          <Logout />
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
