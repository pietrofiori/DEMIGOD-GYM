import React, { useState, ChangeEvent } from "react";
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
import { AccountInterface } from "./AccountContext";
import { host } from "@/App";
import { useAccounts } from "./AccountContext";
import { useFiliais } from "../filiais/FiliaisContext";

interface AccountProps {
  account?: AccountInterface;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export default function CardCreateAccount({
  account,
  isUpdate = false,
  onSuccess,
}: AccountProps) {
  const [nameAccount, setNameAccount] = useState(account?.nome || "");
  const [cpfAccount, setCpfAccount] = useState(account?.cpf || "");
  const [emailAccount, setEmailAccount] = useState(account?.email || "");
  const [genderAccount, setGenderAccount] = useState(account?.sexo || "");
  const [phoneAccount, setPhoneAccount] = useState(account?.telefone || "");
  const [cepAccount, setCepAccount] = useState(account?.cep || "");
  const [idadeAccount, setIdadeAccount] = useState(account?.idade || "");
  const [loginAccount, setLoginAccount] = useState(account?.login || "");
  const [passwordAccount, setPasswordAccount] = useState(account?.senha || "");
  const [filialID,setFilialID] = useState(account?.filialId || "")
  const [isCreating, setIsCreating] = useState(false);
  const {filiais} = useFiliais()
  const { toast } = useToast();
  const { updateAccount, updateSpecificAccount } = useAccounts();

  const handleNameAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setNameAccount(event.target.value);
  };

  const handleCpfAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setCpfAccount(event.target.value);
  };
  const handleFilialID = (value: string) => {
    setFilialID(parseInt(value));
  };
  const handleEmailAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailAccount(event.target.value);
  };

  const handleGenderAccount = (value: string) => {
    setGenderAccount(value);
  };

  const handlePhoneAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneAccount(event.target.value);
  };

  const handleCepAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setCepAccount(event.target.value);
  };

  const handleIdadeAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setIdadeAccount(event.target.value);
  };

  const handleLoginAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginAccount(event.target.value);
  };

  const handlePasswordAccount = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordAccount(event.target.value);
  };

  const unMask = (value: string) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleCreateAccount = async () => {
    try {
      setIsCreating(true);
      const method = isUpdate ? "PUT" : "POST";
      const endpoint = isUpdate
        ? `${host}Contas/${account?.id}`
        : `${host}Contas`;

      const accountData = {
        nome: nameAccount,
        cpf: unMask(cpfAccount),
        email: emailAccount,
        sexo: genderAccount,
        telefone: unMask(phoneAccount),
        cep: cepAccount,
        idade: idadeAccount,
        login: loginAccount,
        senha: passwordAccount,
        filialId: filialID,
        ...(isUpdate && { id: account?.id }),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accountData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} conta`
        );
      }

      const data = isUpdate ? "" : await response.json();

      if (isUpdate) {
        updateSpecificAccount(accountData as any);
      } else {
        updateAccount(data);
      }

      toast({
        description: !isUpdate ? "Conta Cadastrada com Sucesso" : "Conta Atualizada com Sucesso",
      });

      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Ocorreu um erro ao ${
          isUpdate ? "atualizar" : "cadastrar"
        } a conta`,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Atualizar dados da conta" : "Cadastrar Conta"}
        </CardTitle>
        <CardDescription>
          Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} uma
          nova conta
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Nome da Conta
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Nome da Conta"
            value={nameAccount}
            onChange={handleNameAccount}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonLogin">
            Login
          </Label>
          <Input
            className="col-span-3"
            id="buttonLogin"
            placeholder="Login da Conta"
            value={loginAccount}
            onChange={handleLoginAccount}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonPassword">
            Senha
          </Label>
          <Input
            className="col-span-3"
            id="buttonPassword"
            type="password"
            placeholder="Senha da Conta"
            value={passwordAccount}
            onChange={handlePasswordAccount}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonEmail">
            E-mail
          </Label>
          <Input
            className="col-span-3"
            id="buttonEmail"
            placeholder="E-mail da Conta"
            value={emailAccount}
            onChange={handleEmailAccount}
            required
            type="email"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonCpf">
            CPF
          </Label>
          <Input
            className="col-span-3"
            id="buttonCpf"
            placeholder="CPF da Conta"
            value={cpfAccount}
            onChange={handleCpfAccount}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonGender">
            Gênero
          </Label>
          <Select value={genderAccount} onValueChange={handleGenderAccount}>
            <SelectTrigger className="col-span-3" id="buttonGender">
              <SelectValue placeholder="Selecione o Gênero " />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Masculino">Masculino</SelectItem>
              <SelectItem value="Feminino">Feminino</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonPhone">
            Telefone
          </Label>
          <Input
            className="col-span-3"
            id="buttonPhone"
            placeholder="(51) X-XXXXXXXX"
            pattern="\d{11}"
            value={phoneAccount}
            onChange={handlePhoneAccount}
            required
            type="tel"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonCep">
            CEP
          </Label>
          <Input
            className="col-span-3"
            id="buttonCep"
            placeholder="00000-000"
            value={cepAccount}
            onChange={handleCepAccount}
            required
            type="text"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonIdade">
            Idade
          </Label>
          <Input
            className="col-span-3"
            id="buttonIdade"
            placeholder="Idade da Conta"
            value={idadeAccount}
            onChange={handleIdadeAccount}
            required
            type="number"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="selectInstrutor">
           Filial
          </Label>
          <Select value={filialID?.toString()} onValueChange={handleFilialID}>
            <SelectTrigger className="col-span-3" id="selectInstrutor">
              <SelectValue placeholder="Selecione a Filial" />
            </SelectTrigger>
            <SelectContent position="popper">
              {filiais.map((filial) => (
                <SelectItem key={filial.id} value={filial.id.toString()}>
                  {filial.endereco}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          disabled={isCreating}
          onClick={handleCreateAccount}
          variant="blue"
        >
          {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isUpdate ? "Atualizar Conta" : "Cadastrar Conta"}
        </Button>
      </CardFooter>
    </>
  );
}
