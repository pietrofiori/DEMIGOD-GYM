import React from "react";
import { Row, Col } from "antd";
import { useAccounts } from "@/components/account/AccountContext";
import { useClients } from "@/components/clients/ClientsContext";
import { useInstrutores } from "@/components/instrutores/InstrutoresContext";
import { usePlanos } from "@/components/planos/PlanosContext";
import { useModalidades } from "@/components/modalidades/ModalidadesContext";
import { useMaquinas } from "@/components/maquinas/MaquinasContext";
import { useAvaliacoes } from "@/components/avaliacoes/AvaliacoesContext";
import { useFiliais } from "@/components/filiais/FiliaisContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User, DollarSign, Calendar, Clipboard, Wrench ,CheckSquare, MapPin, Users } from "lucide-react";

const RelatoriosPage = () => {
  const { accounts } = useAccounts();
  const { clients } = useClients();
  const { instrutores } = useInstrutores();
  const { planos } = usePlanos();
  const { modalidades } = useModalidades();
  const { maquinas } = useMaquinas();
  const { avaliacoes } = useAvaliacoes();
  const { filiais } = useFiliais();

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="dashboard-container m-7">
      <div className="w-full flex mb-7 items-center justify-between">
        <CardTitle>Relatórios</CardTitle>
        <Input type="date" value={today} className="bg-card w-[300px]" />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pr-4">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Contas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {accounts.map((account) => (
                      <li key={account.id} className="flex items-center">
                        <DollarSign className="mr-2" /> {account.nome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Instrutores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {instrutores.map((instrutor) => (
                      <li key={instrutor.id} className="flex items-center">
                        <Users className="mr-2" /> {instrutor.nome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Planos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {planos.map((plano) => (
                      <li key={plano.id} className="flex items-center">
                        <Clipboard className="mr-2" /> {plano.nome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Modalidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {modalidades.map((modalidade) => (
                      <li key={modalidade.id} className="flex items-center">
                        <Calendar className="mr-2" /> {modalidade.nome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Máquinas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {maquinas.map((maquina) => (
                      <li key={maquina.id} className="flex items-center">
                        <Wrench className="mr-2" /> {maquina.nome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Avaliações</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {avaliacoes.map((avaliacao) => (
                      <li key={avaliacao.id} className="flex items-center">
                        <CheckSquare className="mr-2" /> {avaliacao.nomeSala}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Filiais</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    {filiais.map((filial) => (
                      <li key={filial.id} className="flex items-center">
                        <MapPin className="mr-2" /> {filial.endereco}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <Card>
            <CardHeader>
              <CardTitle>Usuários Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {clients.map((client) => (
                  <li key={client.id} className="flex items-center">
                    <User className="mr-2" /> {client.nome}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosPage;
