import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import {
  User,
  DollarSign,
  Calendar,
  Clipboard,
  Wrench,
  CheckSquare,
  MapPin,
  Users,
} from "lucide-react";
import CardRelatoriosMaquinas from "@/components/Relatórios/CardRelatórioMáquinas";
import CardRelatoriosPlanos from "@/components/Relatórios/CardRelatóriosPlanos";
import CardRelatoriosModalidades from "@/components/Relatórios/CardRelatoriosModalidades";
import CardRelatoriosAvaliacoes from "@/components/Relatórios/CardRelatóriosAvaliacoes";
import CardRelatoriosContas from "@/components/Relatórios/CardRelatóriosContas";
import CardRelatoriosAlunos from "@/components/Relatórios/CardRelatóriosAlunos";
import CardRelatoriosInstrutores from "@/components/Relatórios/CardRelatóriosInstrutores";

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
        <div className="flex items-center justify-center gap-5">
          {" "}
          Data Atual:
          <Input
            type="date"
            value={today}
            className="bg-card w-[300px]"
            readOnly
          />
        </div>
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
                    {accounts.map((contas) => (
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <CheckSquare className="mr-2" />
                                {contas.nome}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosContas conta={contas} />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <CheckSquare className="mr-2" />
                                {instrutor.nome}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosInstrutores instrutor={instrutor} />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                      <div key={plano.id}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <Clipboard className="mr-2" />
                                {plano.nome}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosPlanos plano={plano} />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <Calendar className="mr-2" />
                                {modalidade.nome}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosModalidades
                              modalidade={modalidade}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <Clipboard className="mr-2" />
                                {maquina.nome}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosMaquinas maquina={maquina} />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer">
                              <li className="flex items-center gap-2">
                                <CheckSquare className="mr-2" />
                                {avaliacao.nomeSala}
                              </li>
                              <button className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                                Ver detalhes
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <CardRelatoriosAvaliacoes avaliacao={avaliacao} />
                          </DialogContent>
                        </Dialog>
                      </div>
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
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex items-center justify-between py-2 cursor-pointer">
                          <li className="flex items-center gap-2">
                            <CheckSquare className="mr-2" />
                            {client.nome}
                          </li>
                          <button className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                            Ver detalhes
                          </button>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <CardRelatoriosAlunos aluno={client} />
                      </DialogContent>
                    </Dialog>
                  </div>
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
