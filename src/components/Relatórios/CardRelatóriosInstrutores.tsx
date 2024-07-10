import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, MapPin } from "lucide-react";
import { InstrutoresInterface } from "../instrutores/InstrutoresContext";

interface InstrutorProps {
  instrutor: InstrutoresInterface;
}

export default function CardRelatoriosInstrutores({ instrutor }: InstrutorProps) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{instrutor.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-lg gap-4">
          Nome:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-blue-500" />
            <span>{instrutor.nome}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          CPF:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{instrutor.cpf}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Email:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-purple-500" />
            <span>{instrutor.email}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Idade:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-orange-500" />
            <span>{instrutor.idade}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Sexo:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-cyan-500" />
            <span>{instrutor.sexo}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          Telefone:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-green-500" />
            <span>{instrutor.telefone}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-4">
          CEP:
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5 text-purple-500" />
            <span>{instrutor.cep}</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
