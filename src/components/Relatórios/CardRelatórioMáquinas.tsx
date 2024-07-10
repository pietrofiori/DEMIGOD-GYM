import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, MapPin, Wrench } from "lucide-react";
import { MaquinasInterface } from "@/components/maquinas/MaquinasContext";
import { useFiliais } from "@/components/filiais/FiliaisContext";

interface MaquinaProps {
  maquina: MaquinasInterface;
}

export default function CardRelatoriosMaquinas({ maquina }: MaquinaProps) {
  const { filiais } = useFiliais();
  const filteredFilial = filiais.find(
    (filial) => filial.id === maquina.filialId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{maquina.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome da máquina:
          <div className="flex items-center">
          <Wrench className="mr-2 h-5 w-5 text-blue-500" />
          <span>{maquina.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Músculo:
          <div className="flex items-center">
          <Dumbbell className="mr-2 h-5 w-5 text-green-500" />
          <span>{maquina.musculo}</span>
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
