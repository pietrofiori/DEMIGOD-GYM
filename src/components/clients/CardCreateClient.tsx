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
import { Loader2 } from "lucide-react";
interface User {
  id: string;
  name: string;
  guid: string;
}

export default function CardCreateClient() {
  const [nameSensor, setNameSensor] = useState("");
  const [nameButton, setNameButton] = useState("");
  const [typeMeasure, setTypeMeasure] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");

  const [geralThreshold, setGeralThreshold] = useState(" ");
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const handleNameSensor = (value: string) => {
    setNameSensor(value);
  };

  const handleNameButton = (event: ChangeEvent<HTMLInputElement>) => {
    setNameButton(event.target.value);
  };
  const handleTypeMeasure = (value: string) => {
    setTypeMeasure(value);
  };
  const handleMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    setGeralThreshold("");
    setMaxValue(event.target.value);
  };
  const handleMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    setGeralThreshold("");
    setMinValue(event.target.value);
  };

  const handleGeralThreshold = (value: string) => {
    setGeralThreshold(value);
  };

  const handleCreateButton = () => {
    // try {
    //   if (nameButton && typeMeasure) {
    //     if (showMinMaxFields && (!maxValue || !minValue)) {
    //       toast({
    //         variant: "destructive",
    //         description:
    //           "Por favor, preencha os valores mínimo e máximo antes de criar o sensor.",
    //       });
    //       return;
    //     }
    //     setIsCreating(true);
    //     const message = {
    //       api: "admin",
    //       mt: isUpdate ? "UpdateSensorButton" : "InsertSensorButton",
    //       ...(isUpdate && { id: existingButton?.id }),
    //       name: nameButton,
    //       value: nameSensor,
    //       guid: selectedUser?.guid,
    //       type: "sensor",
    //       min: geralThreshold ? geralThreshold : minValue,
    //       max: geralThreshold ? geralThreshold : maxValue,
    //       sensorType: typeMeasure,
    //       page: selectedPage,
    //       x: clickedPosition?.j,
    //       y: clickedPosition?.i,
    //     };
    //     wss?.sendMessage(message);
    //     setIsCreating(false);
    //   } else {
    //     toast({
    //       variant: "destructive",
    //       description:
    //         "Por favor, preencha todos os campos antes de criar o sensor.",
    //     });
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
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
    }
  

  // const typesWithoutMinMax = ["leak", "light", "pir", "tvoc", "magnet_status"];
  // const typesWithSelectOnly = ["magnet_status", "leak", "pir"];

  // const showMinMaxFields = !typesWithoutMinMax.includes(typeMeasure);
  // const showSelectOnly = typesWithSelectOnly.includes(typeMeasure);

  return (
    <>
        <CardHeader>
          <CardTitle>Atualizar Botão</CardTitle>
          <CardDescription>descrição</CardDescription>
        </CardHeader>

      <CardContent className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Selecione o Sensor
          </Label>
          <Select value={nameSensor} onValueChange={handleNameSensor}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Selecione um Sensor" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sensores</SelectLabel>
                {/* {sensors.map((sensor) => (
                  <SelectItem
                    key={sensor.sensor_name}
                    value={sensor.sensor_name}
                  >
                    {sensor.sensor_name}
                  </SelectItem>
                ))} */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="buttonName">
            Nome do botão
          </Label>
          <Input
            className="col-span-3"
            id="buttonName"
            placeholder="Nome do botão"
            value={nameButton}
            onChange={handleNameButton}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-end" htmlFor="framework" id="typeMeasure">
            Tipo de medida
          </Label>
          <Select value={typeMeasure} onValueChange={handleTypeMeasure}>
            <SelectTrigger className="col-span-3" id="SelectTypeMeasure">
              <SelectValue placeholder="Selecione o tipo de medida" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="co2">CO²</SelectItem>
              <SelectItem value="battery">Bateria</SelectItem>
              <SelectItem value="humidity">Umidade do ar</SelectItem>
              <SelectItem value="leak">Alagamento</SelectItem>
              <SelectItem value="temperature">Temperatura</SelectItem>
              <SelectItem value="light">Iluminação</SelectItem>
              <SelectItem value="pir">Presença (V/F)</SelectItem>
              <SelectItem value="pressure">Pressão</SelectItem>
              <SelectItem value="tvoc">Compostos Orgânicos Voláteis</SelectItem>
              <SelectItem value="magnet_status">Aberto/Fechado</SelectItem>
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
        {/* {!isCreating && (
          <Button onClick={handleCreateButton}>
            {isUpdate ? "Atualizar" : "Criar"} Sensor
          </Button>
        )} */}
        {isCreating && (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {/* {isUpdate ? "Atualizar" : "Criar"} Sensor */}
          </Button>
        )}
      </CardFooter>
    </>
  );
}

