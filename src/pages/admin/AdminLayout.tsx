import { Routes, Route } from "react-router-dom";
import ValidadeToken from "@/components/validateToken/ValidateToken";
import HeaderApp from "@/components/header/HeaderApp";
import { useAccount } from "@/components/account/AccountContext";
import ClientsPage from "./ClientsPage";
import InstrutoresPage from "./InstrutoresPage";
import ModalidadesPage from "./ModalidadesPage";
import PlanosPage from "./PlanosPage";
import AvaliacoesPage from "./AvaliacoesPage";

function AdminLayout() {
  const account = useAccount();

  return (
    <div>
      <HeaderApp />
      <Routes>
        {/* <Route path="account" element={<Account />} /> */}
        <Route path="clients" element={<ClientsPage />} />
        <Route path="instrutores" element={<InstrutoresPage />} />
        <Route path="modalidades" element={<ModalidadesPage />} />
        <Route path="planos" element={<PlanosPage />} />
        <Route path="avaliacoes" element={<AvaliacoesPage />} />
        {/* Add more admin routes as needed */}
      </Routes>
    </div>
  );
}
///ValidadeToken(AdminLayout)
export default AdminLayout
