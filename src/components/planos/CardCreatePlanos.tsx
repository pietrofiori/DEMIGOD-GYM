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
  import { host } from "@/App";
  
  import { useToast } from "@/components/ui/use-toast";
  import React, { useEffect, useState, ChangeEvent } from "react";
  import { Loader2, Pencil } from "lucide-react";
 import { PlanosInterface, usePlanos } from "./PlanosContext";
import { useFiliais } from "../filiais/FiliaisContext";
  interface PlanosProps {
    plano?: PlanosInterface;
    isUpdate?: boolean;
    onSuccess?: () => void;
  }
  
  export default function CardCreatePlanos({
    plano,
    isUpdate = false,
    onSuccess
  }: PlanosProps) {
    const [namePlano, setNamePlano] = useState(plano?.nome || "");
    const [precoPlano, setPrecoPlano] = useState(plano?.preco || "");
    const [filialID,setFilialID] = useState(plano?.filialId || "")
    const {updatePlanos, updateSpecificPlano} = usePlanos()
    const [isCreating, setIsCreating] = useState(false);
    const { toast } = useToast();
    const {filiais} = useFiliais()
  
    const handleNamePlano = (event: ChangeEvent<HTMLInputElement>) => {
      setNamePlano(event.target.value);
    };
  
    const handlePrecoPlano = (event: ChangeEvent<HTMLInputElement>) => {
      setPrecoPlano(event.target.value);
    };
    const handleFilialID = (value: string) => {
      setFilialID(parseInt(value));
    };

    const unMask = (value: any) => {
      return value.replace(/[^0-9]/g, "");
    };
  
    const handleCreatePlano = async () => {
      try {
        setIsCreating(true);
        const method = isUpdate ? "PUT" : "POST";
        const endpoint = isUpdate
          ? `${host}Planos/${plano?.id}`
          : `${host}Planos`;
    
        const planoData = {
          nome: namePlano,
          preco: precoPlano,
          filialId: filialID,
          ...(isUpdate && { id: plano?.id }),
        };
    
        const response = await fetch(endpoint, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(planoData),
        });
    
        if (!response.ok) {
          throw new Error(
            `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} plano`
          );
        }
    
        const data = isUpdate ? "" : await response.json();
    
        if (isUpdate) {
          updateSpecificPlano(planoData as any);
        } else {
          updatePlanos(data);
        }
    
        toast({
          description: "Plano Atualizado com Sucesso"
        });
    
        onSuccess?.();
      } catch (error) {
        toast({
          variant: "destructive",
          description: `Ocorreu um erro ao ${
            isUpdate ? "atualizar" : "cadastrar"
          } o plano`,
        });
      } finally {
        setIsCreating(false);
      }
    };
    
  
    return (
      <>
        <CardHeader>
          <CardTitle>
            {isUpdate ? "Atualizar dados do Plano" : "Cadastrar Plano"}
          </CardTitle>
          <CardDescription>
            Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} um
            novo Plano
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="buttonName">
              Nome do Plano
            </Label>
            <Input
              className="col-span-3"
              id="buttonName"
              placeholder="Nome do Plano"
              value={namePlano}
              onChange={handleNamePlano}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="buttonName">
              Preco
            </Label>
            <Input
              className="col-span-3"
              id="buttonName"
              placeholder="Preço Ex: 100.00"
              value={precoPlano}
              onChange={handlePrecoPlano}
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
            <Button onClick={handleCreatePlano} variant="blue">
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
  