import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import {
  AccountProvider,

} from "./components/account/AccountContext";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./pages/admin/AdminLayout";
import NoPage from "./pages/NoPage";

import { ClientProvider } from "./components/clients/ClientsContext";
import { ThemeProvider } from "./components/theme-provider";
import { InstrutorProvider } from "./components/instrutores/InstrutoresContext";
import { PlanoProvider } from "./components/planos/PlanosContext";
import { ModalidadeProvider } from "./components/modalidades/ModalidadesContext";
import { Toaster } from "./components/ui/toaster";
import { MaquinasProvider } from "./components/maquinas/MaquinasContext";
import { AvaliacaoProvider } from "./components/avaliacoes/AvaliacoesContext";
import { FilialProvider } from "./components/filiais/FiliaisContext";

export const host = "https://localhost:7288/api/"
function App() {
  return (
    <ThemeProvider>
      <FilialProvider>
      <AvaliacaoProvider>
        <MaquinasProvider>
        <ModalidadeProvider>
        <PlanoProvider>
          <InstrutorProvider>
            <ClientProvider>
              <AccountProvider>
                <Routes>
                  {/* <Route path="/" element={<RootRoute />} /> */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/admin/*" element={<AdminRoute />} />
                  {/* <Route path="/user/*" element={<UserRoute />} /> */}
                  <Route path="*" element={<NoPage />} />
                </Routes>
              </AccountProvider>
            </ClientProvider>
          </InstrutorProvider>
        </PlanoProvider>
        </ModalidadeProvider>
        </MaquinasProvider>
        </AvaliacaoProvider>
        </FilialProvider>
      <Toaster/>
    </ThemeProvider>
  );
}

// function RootRoute() {
//   const isLogged = localStorage.getItem("isLogged");
//   return isLogged ? <Navigate to="/user" /> : <LoginPage />;
// }

function AdminRoute() {
  // const account = useContext(AccountContext);
  // const { updateAccount } = useAccount();
  // useEffect(() => {
  //   if (!account.isAdmin) {
  //     updateAccount({ isAdmin: true });
  //   }
  // }, [account.isAdmin, updateAccount]);

  return <AdminLayout />;
}

// function UserRoute() {
//   const account = useContext(AccountContext);
//   const { updateAccount } = useAccount();
//   useEffect(() => {
//     if (account.isAdmin) {
//       updateAccount({ isAdmin: false });
//     }
//   }, [account.isAdmin, updateAccount]);

//   return <UserLayout />;
// }

export default App;
