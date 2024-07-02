import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import {
  AccountProvider,
  AccountContext,
  useAccount,
} from "./components/account/AccountContext";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./pages/admin/AdminLayout";
import NoPage from "./pages/NoPage";

import { ClientProvider } from "./components/clients/ClientsContext";
import LanguageProvider from "./components/language/LanguageContext";
import { ThemeProvider } from "./components/theme-provider";
import { InstrutorProvider } from "./components/instrutores/InstrutoresContext";
import { PlanoProvider } from "./components/planos/PlanosContext";
import { ModalidadeProvider } from "./components/modalidades/ModalidadesContext";


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
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
      </LanguageProvider>
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
