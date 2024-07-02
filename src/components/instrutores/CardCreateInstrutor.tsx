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
  import { InstrutoresInterface } from "./InstrutoresContext";
  interface InstrutorProps {
    instrutor?: InstrutoresInterface;
    isUpdate?: boolean;
  }
  
  export default function CardCreateInstrutor({
    instrutor,
    isUpdate = false,
  }: InstrutorProps) {
    const [nameInstrutor, setNameInstrutor] = useState(instrutor?.fullName || "");
    const [cpfInstrutor, setCpfInstrutor] = useState(instrutor?.cpf || "");
    const [emailInstrutor, setEmailInstrutor] = useState(instrutor?.email || "");
    const [genderInstrutor, setGenderInstrutor] = useState(instrutor?.sexo || "");
    const [phoneInstrutor, setPhoneInstrutor] = useState(instrutor?.telefone || "");
    const [cepInstrutor, setCepInstrutor] = useState(instrutor?.cep || "");
    const [isCreating, setIsCreating] = useState(false);
    const { toast } = useToast();
  
    const handleNameInstrutor = (event: ChangeEvent<HTMLInputElement>) => {
      setNameInstrutor(event.target.value);
    };
  
    const handleCpfInstrutor = (event: ChangeEvent<HTMLInputElement>) => {
      setCpfInstrutor(event.target.value);
    };
    const handleEmailInstrutor = (event: ChangeEvent<HTMLInputElement>) => {
      setEmailInstrutor(event.target.value);
    };
    const handleGenderInstrutor = (value: string) => {
      setGenderInstrutor(value);
    };
    const handlePhoneInstrutor = (event: ChangeEvent<HTMLInputElement>) => {
      setPhoneInstrutor(event.target.value);
    };
  
    const handleCepInstrutor = (event: ChangeEvent<HTMLInputElement>) => {
      setCepInstrutor(event.target.value);
    };
  
    const unMask = (value: any) => {
      return value.replace(/[^0-9]/g, "");
    };
  
    const handleCreateInstrutor = async () => {
      if (isUpdate) {
        // fetch para atualizar os dados com method PUT
      } else {
        try {
          setIsCreating(true);
          const response = await fetch("/api/AddInstrutor (colocar aqui dps) ", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Colocar o Token aqui": "Token aqui",
            },
            body: JSON.stringify({
              name: nameInstrutor,
              cpf: unMask(cpfInstrutor),
              email: emailInstrutor,
              gender: genderInstrutor,
              phone: unMask(phoneInstrutor),
              cep: cepInstrutor,
            }),
          });
  
          if (!response.ok) {
            throw new Error("Erro ao cadastrar Instrutor");
          }
  
          toast({
            description: "Instrutor cadastrado com sucesso",
          });
        } catch (error) {
          toast({
            variant: "destructive",
            description: "Ocorreu um erro ao cadastrar o Instrutor",
          });
        } finally {
          setIsCreating(false);
        }
      }
    };
  
    const handleDeleteButton = () => {
      // try {
      //   wss?.sendMessage({
      //     api: "admin",
      //     mt: "DeleteButtons",
      //     id: existingButton?.id,
      //   });
      // } catch (e) {
      //   console.error(e);
    };
  
    return (
      <>
        <CardHeader>
          <CardTitle>
            {isUpdate ? "Atualizar dados do Instrutor" : "Cadastrar Instrutor"}
          </CardTitle>
          <CardDescription>
            Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} um
            novo Instrutor
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="buttonName">
              Nome do Instrutor
            </Label>
            <Input
              className="col-span-3"
              id="buttonName"
              placeholder="Nome do Instrutor"
              value={nameInstrutor}
              onChange={handleNameInstrutor}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="buttonName">
              CPF
            </Label>
            <Input
              className="col-span-3"
              id="buttonName"
              placeholder="CPF do Instrutor"
              value={cpfInstrutor}
              onChange={handleCpfInstrutor}
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
              placeholder="E-mail do Instrutor"
              value={emailInstrutor}
              onChange={handleEmailInstrutor}
              required
              type="email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="framework" id="typeGender">
              Gênero
            </Label>
            <Select value={genderInstrutor} onValueChange={handleGenderInstrutor}>
              <SelectTrigger className="col-span-3" id="selectTypeGender">
                <SelectValue placeholder="Selecione o Gênero " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
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
              value={phoneInstrutor}
              onChange={handlePhoneInstrutor}
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
              placeholder="(51) X-XXXXXXXX"
              pattern="\d{11}"
              value={cepInstrutor}
              onChange={handleCepInstrutor}
              required
              type="number"
            />
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
            <Button onClick={handleCreateInstrutor} variant="blue">
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
  