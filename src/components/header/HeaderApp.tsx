import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import LogoApp from "@/assets/logoApp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useClients } from "../clients/ClientsContext"; // apagar depois de testar
import Logout from "@/components/logout/Logout";
import { useAccount } from "@/components/account/AccountContext";
import { useNavigate } from "react-router-dom";

import { LanguageToggle } from "@/components/language/LanguageToggle";
import texts from "../../_data/texts.json";
import { useLanguage } from "../language/LanguageContext";

export default function HeaderApp() {
  const account = useAccount();
  const {updateClients} = useClients() // apagar depois de testar

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
    const fictitiousClient = {
      id: 1, // Pode gerar um ID único aqui
      fullName: 'João Souza',
      cpf: '123.456.789-00',
      email: "sou joao@gmail.com",
      sexo: 'Feminino',
      telefone: '(00) 9876-5432',
      cep: '54321-678',
    };

    updateClients(fictitiousClient);
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
          <Button variant="ghost" >
            Máquinas
          </Button>
          <Button variant="ghost" >
            Filiais
          </Button>
          <Button variant="ghost" >
            Conta
          </Button>

          <Logout />
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
