import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, MapPin } from "lucide-react";
import { AccountInterface } from "../account/AccountContext";
import { useFiliais } from "@/components/filiais/FiliaisContext";

interface ContaProps {
  conta: AccountInterface;
}

export default function CardRelatoriosContas({ conta }: ContaProps) {
  const { filiais } = useFiliais();
  const filteredFilial = filiais.find(
    (filial) => filial.id === conta.filialId
  );

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{conta.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-blue-500" />
            <span>{conta.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          CPF:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{conta.cpf}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Filial:
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-red-500" />
            <span>{filteredFilial?.endereco}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Email:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-purple-500" />
            <span>{conta.email}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
