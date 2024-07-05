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
  import { MaquinasInterface, useMaquinas } from "./MaquinasContext";
  
  interface MaquinaProps {
    maquina?: MaquinasInterface;
    isUpdate?: boolean;
    onSuccess?: () => void;
  }
  
  export default function CardCreateMaquinas({
    maquina,
    isUpdate = false,
    onSuccess,
  }: MaquinaProps) {
    const [nameMaquina, setNameMaquina] = useState(maquina?.nome || "");
    const [musculoMaquina, setMusculoMaquina] = useState(maquina?.musculo || "");
    const { updateMaquinas, updateSpecificMaquina } = useMaquinas();
    const [isCreating, setIsCreating] = useState(false);
    const { toast } = useToast();
  
    const handleNameMaquina = (event: ChangeEvent<HTMLInputElement>) => {
      setNameMaquina(event.target.value);
    };
  
    const handleMusculoMaquina = (event: ChangeEvent<HTMLInputElement>) => {
      setMusculoMaquina(event.target.value);
    };
  
    const unMask = (value: any) => {
      return value.replace(/[^0-9]/g, "");
    };
  
    const handleCreateMaquina = async () => {
      try {
        setIsCreating(true);
        const method = isUpdate ? "PUT" : "POST";
        const endpoint = isUpdate
          ? `${host}Maquinas/${maquina?.id}`
          : `${host}Maquinas`;
  
        const maquinaData = {
          nome: nameMaquina,
          musculo: musculoMaquina,
          ...(isUpdate && { id: maquina?.id }),
        };
  
        const response = await fetch(endpoint, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(maquinaData),
        });
  
        if (!response.ok) {
          throw new Error(
            `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} maquina`
          );
        }
  
        const data = isUpdate ? "" : await response.json();
  
        if (isUpdate) {
          updateSpecificMaquina(maquinaData as any);
        } else {
          updateMaquinas(data);
        }
  
        toast({
          description: "Maquina Atualizada com Sucesso",
        });
  
        onSuccess?.();
      } catch (error) {
        toast({
          variant: "destructive",
          description: `Ocorreu um erro ao ${
            isUpdate ? "atualizar" : "cadastrar"
          } a maquina`,
        });
      } finally {
        setIsCreating(false);
      }
    };
  
    return (
      <>
        <CardHeader>
          <CardTitle>
            {isUpdate ? "Atualizar dados da Maquina" : "Cadastrar Maquina"}
          </CardTitle>
          <CardDescription>
            Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} uma
            nova Maquina
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="buttonName">
              Nome da Maquina
            </Label>
            <Input
              className="col-span-3"
              id="buttonName"
              placeholder="Nome da Maquina"
              value={nameMaquina}
              onChange={handleNameMaquina}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-end" htmlFor="muscleName">
              Musculo
            </Label>
            <Input
              className="col-span-3"
              id="muscleName"
              placeholder="Musculo ex: Biceps"
              value={musculoMaquina}
              onChange={handleMusculoMaquina}
              required
              type="text"
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
            <Button onClick={handleCreateMaquina} variant="blue">
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
  