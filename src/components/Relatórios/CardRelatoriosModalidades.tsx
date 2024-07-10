import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, MapPin, User } from "lucide-react";
import { ModalidadesInterface } from "@/components/modalidades/ModalidadesContext";
import { useInstrutores } from "@/components/instrutores/InstrutoresContext";

interface ModalidadesProps {
  modalidade: ModalidadesInterface;
}

export default function CardRelatoriosModalidades({
  modalidade,
}: ModalidadesProps) {
  const { instrutores } = useInstrutores();
  const filteredInstrutor = instrutores.find(
    (instrutor) => instrutor.id === modalidade.instrutorId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{modalidade.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome da modalidade:
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-500" />
            <span>{modalidade.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Preço:
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-500" />
            <span>{modalidade.preco}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Instrutor:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-red-500" />
            <span>{filteredInstrutor?.nome}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
