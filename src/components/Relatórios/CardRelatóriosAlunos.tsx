import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, MapPin } from "lucide-react";
import { ClientsInterface } from "../clients/ClientsContext";
import { usePlanos } from "@/components/planos/PlanosContext";

interface AlunoProps {
  aluno: ClientsInterface;
}

export default function CardRelatoriosAlunos({ aluno }: AlunoProps) {
  const { planos } = usePlanos();
  const filteredPlano = planos.find(
    (plano) => plano.id === aluno.planoId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{aluno.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-blue-500" />
            <span>{aluno.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          CPF:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{aluno.cpf}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Email:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-purple-500" />
            <span>{aluno.email}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Plano Escolhido:
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-red-500" />
            <span>{filteredPlano?.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Idade:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-orange-500" />
            <span>{aluno.idade}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Sexo:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-cyan-500" />
            <span>{aluno.sexo}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Telefone:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{aluno.telefone}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          CEP:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-purple-500" />
            <span>{aluno.cep}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
