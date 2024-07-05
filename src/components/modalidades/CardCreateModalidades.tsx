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
import { ModalidadesInterface, useModalidades } from "./ModalidadesContext";
interface ModalidadeProps {
  modalidade?: ModalidadesInterface;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export default function CardCreateModalidades({
  modalidade,
  isUpdate = false,
  onSuccess,
}: ModalidadeProps) {
  const [nameModalidade, setNameModalidade] = useState(modalidade?.nome || "");
  const [precoModalidade, setPrecoModalidade] = useState(
    modalidade?.preco || ""
  );
  const { updateModalidades, updateSpecificModalidade } = useModalidades();
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleNameModalidade = (event: ChangeEvent<HTMLInputElement>) => {
    setNameModalidade(event.target.value);
  };

  const handlePrecoModalidade = (event: ChangeEvent<HTMLInputElement>) => {
    setPrecoModalidade(event.target.value);
  };

  const unMask = (value: any) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleCreateModalidade = async () => {
    try {
      setIsCreating(true);
      const method = isUpdate ? "PUT" : "POST";
      const endpoint = isUpdate
        ? `${host}Modalidades/${modalidade?.id}`
        : `${host}Modalidades`;

      const modalidadeData = {
        nome: nameModalidade,
        preco: precoModalidade,
        ...(isUpdate && { id: modalidade?.id }),
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modalidadeData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} modalidade`
        );
      }

      const data = isUpdate ? "" : await response.json();

      if (isUpdate) {
        updateSpecificModalidade(modalidadeData as any);
      } else {
        updateModalidades(data);
      }

      toast({
        description: "Modalidade Atualizada com Sucesso",
      });

      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Ocorreu um erro ao ${
          isUpdate ? "atualizar" : "cadastrar"
        } a modalidade`,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Atualizar dados da Modalidade" : "Cadastrar Modalidade"}
        </CardTitle>
        <CardDescription>
          Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} uma
          nova Modalidade
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Nome da Modalidade
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Nome da Modalidade"
            value={nameModalidade}
            onChange={handleNameModalidade}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Preço
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Preço ex: 100.00"
            value={precoModalidade}
            onChange={handlePrecoModalidade}
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
          <Button onClick={handleCreateModalidade} variant="blue">
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
