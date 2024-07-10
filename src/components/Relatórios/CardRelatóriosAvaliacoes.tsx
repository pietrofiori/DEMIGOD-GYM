import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, MapPin } from "lucide-react";
import { AvaliacaoInterface } from "@/components/avaliacoes/AvaliacoesContext";
import { useClients } from "../clients/ClientsContext";
import { useInstrutores } from "../instrutores/InstrutoresContext";

interface AvaliacaoProps {
  avaliacao: AvaliacaoInterface;
}

export default function CardRelatoriosAvaliacoes({ avaliacao }: AvaliacaoProps) {
  const { clients } = useClients();
  const { instrutores } = useInstrutores();

  const filteredClient = clients.find(
    (client) => client.id === avaliacao.alunoId
  );

  const filteredInstrutor = instrutores.find(
    (instrutor) => instrutor.id === avaliacao.instrutorId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{avaliacao.nomeSala}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Aluno:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-blue-500" />
            <span>{filteredClient?.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Instrutor:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{filteredInstrutor?.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Nome da Sala:
          <div className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-red-500" />
            <span>{avaliacao.nomeSala}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Horário:
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-purple-500" />
            <span>{new Date(avaliacao.horario).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
