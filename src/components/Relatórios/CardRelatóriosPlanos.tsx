import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, MapPin } from "lucide-react";
import { PlanosInterface } from "@/components/planos/PlanosContext";
import { useFiliais } from "@/components/filiais/FiliaisContext";

interface PlanosProps {
  plano: PlanosInterface;
}

export default function CardRelatoriosPlanos({ plano }: PlanosProps) {
  const { filiais } = useFiliais();
  const filteredFilial = filiais.find(
    (filial) => filial.id === plano.filialId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{plano.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome do plano:
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-500" />
            <span>{plano.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Preço:
          <div className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-green-500" />
            <span>{plano.preco.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Filial:
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-red-500" />
            <span>{filteredFilial?.endereco}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
