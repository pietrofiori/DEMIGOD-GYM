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
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useToast } from "@/components/ui/use-toast";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Loader2, Pencil } from "lucide-react";
import { ClientsInterface } from "./ClientsContext";
import { host } from "@/App";
import { useClients } from "./ClientsContext";
import { usePlanos } from "../planos/PlanosContext";
interface ClientProps {
  client?: ClientsInterface;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export default function CardCreateClient({
  client,
  isUpdate = false,
  onSuccess,
}: ClientProps) {
  const [nameClient, setNameClient] = useState(client?.nome || "");
  const [cpfClient, setCpfClient] = useState(client?.cpf || "");
  const [emailClient, setEmailClient] = useState(client?.email || "");
  const [genderClient, setGenderClient] = useState(client?.sexo || "");
  const [phoneClient, setPhoneClient] = useState(client?.telefone || "");
  const [cepClient, setCepClient] = useState(client?.cep || "");
  const [idadeClient, setIdadeClient] = useState(client?.idade || "");
  const [planoId, setPlanoID] = useState(client?.planoId || "");
  const [isCreating, setIsCreating] = useState(false);
  const { planos } = usePlanos();
  const { toast } = useToast();
  const { updateClients, updateSpecificClient } = useClients();

  const handlePlanoID = (value: string) => {
    setPlanoID(parseInt(value));
  };

  const handleNameClient = (event: ChangeEvent<HTMLInputElement>) => {
    setNameClient(event.target.value);
  };

  const handleCpfClient = (event: ChangeEvent<HTMLInputElement>) => {
    setCpfClient(event.target.value);
  };
  const handleEmailClient = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailClient(event.target.value);
  };
  const handleGenderClient = (value: string) => {
    setGenderClient(value);
  };
  const handlePhoneClient = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneClient(event.target.value);
  };

  const handleCepClient = (event: ChangeEvent<HTMLInputElement>) => {
    setCepClient(event.target.value);
  };

  const handleIdadeClient = (event: ChangeEvent<HTMLInputElement>) => {
    setIdadeClient(event.target.value);
  };

  const unMask = (value: any) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleCreateClient = async () => {
    try {
      setIsCreating(true);
      const method = isUpdate ? "PUT" : "POST";
      const endpoint = isUpdate
        ? `${host}Clientes/${client?.id}`
        : `${host}Clientes`;

      const clientData = {
        nome: nameClient,
        cpf: unMask(cpfClient),
        email: emailClient,
        sexo: genderClient,
        telefone: unMask(phoneClient),
        cep: cepClient,
        idade: idadeClient,
        planoId: planoId,
        // planoId
        ...(isUpdate && { id: client?.id }),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} cliente`
        );
      }
      // ajustar esses tratamento conforme o ajuste do backend do sabadin , esperar msg de resposta
      // é daqui para baixo ~pietro
      const data = isUpdate ? "" : await response.json();

      if (isUpdate) {
        updateSpecificClient(clientData as any);
      } else {
        updateClients(data);
      }

      toast({
        description: !isUpdate ? "Aluno Cadastrado com Sucesso" : "Aluno Atualizado com Sucesso",
      });

      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Ocorreu um erro ao ${
          isUpdate ? "atualizar" : "cadastrar"
        } o cliente`,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Atualizar dados do aluno" : "Cadastrar Aluno"}
        </CardTitle>
        <CardDescription>
          Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} um
          novo aluno
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Nome do Aluno
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Nome do Aluno"
            value={nameClient}
            onChange={handleNameClient}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Idade do Aluno
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Idade do Aluno"
            value={idadeClient}
            onChange={handleIdadeClient}
            required
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            CPF
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="CPF do Aluno"
            value={cpfClient}
            onChange={handleCpfClient}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            E-mail
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="E-mail do Aluno"
            value={emailClient}
            onChange={handleEmailClient}
            required
            type="email"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="framework" id="typeGender">
            Gênero
          </Label>
          <Select value={genderClient} onValueChange={handleGenderClient}>
            <SelectTrigger className="col-span-3" id="selectTypeGender">
              <SelectValue placeholder="Selecione o Gênero " />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Masculino">Masculino</SelectItem>
              <SelectItem value="Feminino">Feminino</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Telefone
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="(51) X-XXXXXXXX"
            pattern="\d{11}"
            value={phoneClient}
            onChange={handlePhoneClient}
            required
            type="tel"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            CEP
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="00000-000"
            value={cepClient}
            onChange={handleCepClient}
            required
            type="text"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="selectInstrutor">
            Plano do Aluno
          </Label>
          <Select value={planoId?.toString()} onValueChange={handlePlanoID}>
            <SelectTrigger className="col-span-3" id="selectInstrutor">
              <SelectValue placeholder="Selecione o Plano" />
            </SelectTrigger>
            <SelectContent position="popper">
              {planos.map((plano) => (
                <SelectItem key={plano.id} value={plano.id.toString()}>
                  {plano.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* {isUpdate && (
          <Button variant="secondary">
            <AlertDialog>
              <AlertDialogTrigger>Excluir</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Essa ação não pode ser desfeita. Isso irá deletar
                    permanentemente o botão Sensor.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteButton}>
                    Excluir
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Button>
        )} */}
        {!isCreating && (
          <Button onClick={handleCreateClient} variant="blue">
            {isUpdate ? "Atualizar Cadastro" : "Cadastrar"}
          </Button>
        )}
        {isCreating && (
          <Button disabled variant="blue">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isUpdate ? "Atualizar Cadastro" : "Cadastrar"}
          </Button>
        )}
      </CardFooter>
    </>
  );
}
