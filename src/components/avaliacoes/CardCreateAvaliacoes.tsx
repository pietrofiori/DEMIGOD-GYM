import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { AvaliacaoInterface } from "./AvaliacoesContext";
import { host } from "@/App";
import { useAvaliacoes } from "./AvaliacoesContext";
import { useClients } from "../clients/ClientsContext";
import { useInstrutores } from "../instrutores/InstrutoresContext";

interface AvaliacaoProps {
  avaliacao?: AvaliacaoInterface;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export default function CardCreateAvaliacao({
  avaliacao,
  isUpdate = false,
  onSuccess,
}: AvaliacaoProps) {
  const [alunoID, setAlunoID] = useState<number | undefined>(avaliacao?.alunoId);
  const [instrutorID, setInstrutorID] = useState<number | undefined>(avaliacao?.instrutorId);
  const [nomeSala, setNomeSala] = useState(avaliacao?.nomeSala || "");
  const [horario, setHorario] = useState<Date | undefined>(avaliacao?.horario || undefined);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();
  const { updateAvaliacao, updateSpecificAvaliacao } = useAvaliacoes();
  const { clients } = useClients(); 
  const { instrutores } = useInstrutores(); 

  const handleAlunoID = (value: string) => {
    setAlunoID(parseInt(value)); // Convertendo para número inteiro
  };

  const handleInstrutorID = (value: string) => {
    setInstrutorID(parseInt(value)); // Convertendo para número inteiro
  };

  const handleNomeSala = (event: ChangeEvent<HTMLInputElement>) => {
    setNomeSala(event.target.value);
  };

  const handleHorario = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHorario(value ? new Date(value) : undefined);
  };

  const handleCreateAvaliacao = async () => {
    try {
      setIsCreating(true);
      const method = isUpdate ? "PUT" : "POST";
      const endpoint = isUpdate
        ? `${host}AvaliacoesFisicas/${avaliacao?.id}`
        : `${host}AvaliacoesFisicas`;

      const avaliacaoData = {
        AlunoID: alunoID,
        InstrutorID: instrutorID,
        NomeSala: nomeSala,
        Horario: horario?.toISOString(), // Convertendo para formato datetime, considerando que horario é Date ou undefined
        ...(isUpdate && { id: avaliacao?.id }),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(avaliacaoData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} avaliação`
        );
      }

      const data = isUpdate ? "" : await response.json();

      if (isUpdate) {
        updateSpecificAvaliacao(avaliacaoData as any);
      } else {
        updateAvaliacao(data);
      }

      toast({
        description: !isUpdate ? "Avaliação Cadastrada com Sucesso" : "Avaliação Atualizada com Sucesso",
      });

      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Ocorreu um erro ao ${
          isUpdate ? "atualizar" : "cadastrar"
        } a avaliação`,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Atualizar Avaliação" : "Cadastrar Avaliação"}
        </CardTitle>
        <CardDescription>
          Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} uma
          nova avaliação
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="selectAluno">
            Aluno
          </Label>
          <Select value={alunoID?.toString()} onValueChange={handleAlunoID}>
            <SelectTrigger className="col-span-3" id="selectAluno">
              <SelectValue placeholder="Selecione o Aluno" />
            </SelectTrigger>
            <SelectContent position="popper">
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.id.toString()}>
                  {client.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="selectInstrutor">
            Instrutor
          </Label>
          <Select value={instrutorID?.toString()} onValueChange={handleInstrutorID}>
            <SelectTrigger className="col-span-3" id="selectInstrutor">
              <SelectValue placeholder="Selecione o Instrutor" />
            </SelectTrigger>
            <SelectContent position="popper">
              {instrutores.map((instrutor) => (
                <SelectItem key={instrutor.id} value={instrutor.id.toString()}>
                  {instrutor.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="inputNomeSala">
            Nome da Sala
          </Label>
          <Input
            className="col-span-3"
            id="inputNomeSala"
            placeholder="Nome da Sala"
            value={nomeSala}
            onChange={handleNomeSala}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="inputHorario">
            Horário
          </Label>
          <Input
            className="col-span-3"
            id="inputHorario"
            type="datetime-local"
            placeholder="Horário"
            value={!isUpdate ? horario ? horario.toISOString().substring(0, 16) : "" : horario as any}
            onChange={handleHorario}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          disabled={isCreating}
          onClick={handleCreateAvaliacao}
          variant="blue"
        >
          {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isUpdate ? "Atualizar Avaliação" : "Cadastrar Avaliação"}
        </Button>
      </CardFooter>
    </>
  );
}
