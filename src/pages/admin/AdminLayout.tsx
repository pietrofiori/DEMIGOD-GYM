import { Routes, Route, useLocation } from "react-router-dom";
import ValidadeToken from "@/components/validateToken/ValidateToken";
import { useEffect } from "react";
import HeaderApp from "@/components/header/HeaderApp";
import { useAccounts } from "@/components/account/AccountContext";
import ClientsPage from "./ClientsPage";
import InstrutoresPage from "./InstrutoresPage";
import ModalidadesPage from "./ModalidadesPage";
import PlanosPage from "./PlanosPage";
import AvaliacoesPage from "./AvaliacoesPage";
import { useClients } from "@/components/clients/ClientsContext";
import { useInstrutores } from "@/components/instrutores/InstrutoresContext";
import { host } from "@/App";
import { usePlanos } from "@/components/planos/PlanosContext";
import { useModalidades } from "@/components/modalidades/ModalidadesContext";
import MaquinasPage from "./MaquinasPage";
import { useMaquinas } from "@/components/maquinas/MaquinasContext";
import AccountsPage from "./AccountsPage";
import { useAvaliacoes } from "@/components/avaliacoes/AvaliacoesContext";
import FiliaisPage from "./FiliaisPage";
import { useFiliais } from "@/components/filiais/FiliaisContext";
import RelatoriosPage from "./RelatoriosPage";

function AdminLayout() {
  const {accounts, setAccounts} = useAccounts();
  const location = useLocation();
  const { clients, setClients } = useClients();
  const { instrutores, setInstrutores } = useInstrutores();
  const { setPlanos } = usePlanos();
  const { setModalidades } = useModalidades();
  const {setMaquinas} = useMaquinas()
  const {setAvaliacoes} = useAvaliacoes()
  const { setFiliais } = useFiliais();

  useEffect(() => {
    const fetchAllInfo = async () => {
      try {
        const response = await fetch(host + "Clientes/getzao");
        if (!response.ok) {
          throw new Error("Erro ao buscar Infos");
        }
        const data = await response.json();
        console.log("Consultou TUDO");
        setInstrutores(data.instrutores);
        setClients(data.clientes);
        setPlanos(data.planos);
        setModalidades(data.modalidades);
        setMaquinas(data.maquinas)
        setAccounts(data.contas)
        setAvaliacoes(data.avaliacoesFisicas)
        setFiliais(data.filiais)
      } catch (error) {
        console.error("Erro ao buscar infos:", error);
      }
    };

    fetchAllInfo();
  }, [location, setInstrutores, setClients, setPlanos, setModalidades,setMaquinas, setAccounts,setAvaliacoes, setFiliais]);

  return (
    <div>
      <HeaderApp />
      <Routes>
        {/* <Route path="account" element={<Account />} /> */}
        <Route path="relatorios" element={<RelatoriosPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="instrutores" element={<InstrutoresPage />} />
        <Route path="modalidades" element={<ModalidadesPage />} />
        <Route path="planos" element={<PlanosPage />} />
        <Route path="avaliacoes" element={<AvaliacoesPage />} />
        <Route path="maquinas" element={<MaquinasPage />} />
        <Route path="contas" element={<AccountsPage />} />
        <Route path="filiais" element={<FiliaisPage />} />
        {/* Add more admin routes as needed */}
      </Routes>
    </div>
  );
}
///ValidadeToken(AdminLayout)
export default AdminLayout;
