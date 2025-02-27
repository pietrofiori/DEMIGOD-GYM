import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import LogoApp from "@/assets/logoApp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useClients } from "../clients/ClientsContext"; // apagar depois de testar
import Logout from "@/components/logout/Logout";
import { useAccounts } from "../account/AccountContext";
import { useNavigate } from "react-router-dom";
import { useInstrutores } from "../instrutores/InstrutoresContext";

import texts from "../../_data/texts.json";
import { usePlanos } from "../planos/PlanosContext";
import { useModalidades } from "../modalidades/ModalidadesContext";

export default function HeaderApp() {
  const { accounts } = useAccounts();
  const { updateClients } = useClients(); // apagar depois de testar
  const { updateInstrutores } = useInstrutores(); // apagar depois de testar
  const { updatePlanos } = usePlanos();
  const { updateModalidades } = useModalidades();
  const navigate = useNavigate();

  const handlePlanosViewClick = () => {
    navigate("/admin/planos");
  };

  const handleReportsViewClick = () => {
    navigate("/admin/relatorios");
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
  const handleMaquinasViewClick = () => {
    navigate("/admin/maquinas");
  };
  const handleContaViewClick = () => {
    navigate("/admin/contas");
  };
  const handleFiliaisViewClick = () => {
    navigate("/admin/filiais");
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
            Administrador
          </h3>
          <p className="text-sm text-muted-foreground">
            adminDemiGod@gmail.com
          </p>
        </div>
      </div>

      <div className="flex items-end ">
        <div className="flex items-center gap-1">
        <Button variant="ghost" onClick={handleReportsViewClick}>
            Relatórios
          </Button>
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
          <Button variant="ghost" onClick={handleMaquinasViewClick}>
            Máquinas
          </Button>
          <Button variant="ghost" onClick={handleFiliaisViewClick}>
            Filiais
          </Button>
          <Button variant="ghost" onClick={handleContaViewClick}>
            Conta
          </Button>

          <Logout />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
