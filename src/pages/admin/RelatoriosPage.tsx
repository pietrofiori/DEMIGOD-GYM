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

const RelatoriosPage = () => {
  const { accounts } = useAccounts();
  const { clients } = useClients();
  const { instrutores } = useInstrutores();
  const { planos } = usePlanos();
  const { modalidades } = useModalidades();
  const { maquinas } = useMaquinas();
  const { avaliacoes } = useAvaliacoes();
  const { filiais } = useFiliais();

  return (
    <div className="dashboard-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Contas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {accounts.map((account) => (
                  <li key={account.id}>{account.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {clients.map((client) => (
                  <li key={client.id}>{client.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Instrutores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {instrutores.map((instrutor) => (
                  <li key={instrutor.id}>{instrutor.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Planos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {planos.map((plano) => (
                  <li key={plano.id}>{plano.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Modalidades</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {modalidades.map((modalidade) => (
                  <li key={modalidade.id}>{modalidade.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Máquinas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {maquinas.map((maquina) => (
                  <li key={maquina.id}>{maquina.nome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Avaliações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {avaliacoes.map((avaliacao) => (
                  <li key={avaliacao.id}>{avaliacao.nomeSala}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xxl={6}>
          <Card>
            <CardHeader>
              <CardTitle>Filiais</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {filiais.map((filial) => (
                  <li key={filial.id}>{filial.endereco}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RelatoriosPage;
