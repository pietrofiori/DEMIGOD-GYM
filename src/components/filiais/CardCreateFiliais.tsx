import React, { useState, ChangeEvent } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { host } from "@/App";

interface FilialProps {
  endereco?: string;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export default function CardCreateFilial({
  endereco,
  isUpdate = false,
  onSuccess,
}: FilialProps) {
  const [enderecoFilial, setEnderecoFilial] = useState(endereco || "");
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleEnderecoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnderecoFilial(event.target.value);
  };

  const handleCreateFilial = async () => {
    try {
      setIsCreating(true);
      const method = isUpdate ? "PUT" : "POST";
      const endpoint = isUpdate
        ? `${host}filiais/${endereco}`
        : `${host}filiais`;

      const filialData = {
        endereco: enderecoFilial,
      };

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filialData),
      });

      if (!response.ok) {
        throw new Error(
          `Erro ao ${isUpdate ? "atualizar" : "cadastrar"} a filial`
        );
      }

      const data = isUpdate ? "" : await response.json();

      toast({
        description: !isUpdate ? "Filial Cadastrada com Sucesso" : "Filial Atualizada com Sucesso",
      });

      onSuccess?.();
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Ocorreu um erro ao ${
          isUpdate ? "atualizar" : "cadastrar"
        } a filial`,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isUpdate ? "Atualizar Filial" : "Cadastrar Filial"}
        </CardTitle>
        <CardDescription>
          Insira os dados abaixo para {isUpdate ? "atualizar" : "cadastrar"} uma nova filial
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="inputEndereco">
            Endereço
          </Label>
          <Input
            className="col-span-3"
            id="inputEndereco"
            placeholder="Endereço da Filial"
            value={enderecoFilial}
            onChange={handleEnderecoChange}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          disabled={isCreating}
          onClick={handleCreateFilial}
          variant="blue"
        >
          {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isUpdate ? "Atualizar Filial" : "Cadastrar Filial"}
        </Button>
      </CardFooter>
    </>
  );
}
