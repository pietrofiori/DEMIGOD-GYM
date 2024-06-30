import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import React, { useEffect, useState, ChangeEvent } from "react";
import { Value } from "@radix-ui/react-select";
import { Loader2 } from "lucide-react";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import texts from "@/_data/texts.json";
import { useLanguage } from "@/components/language/LanguageContext";
interface User {
  id: string;
  name: string;
  guid: string;
}
interface ActionsInteface {
  id: number;
  action_name: string; //
  action_alarm_code: string;
  action_start_type: string;
  action_prt: string; //
  action_user: string; //
  action_type: string; //
  action_device?: string | null; //
  action_sensor_name?: string | null;
  action_sensor_type?: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function CardCreateAction() {
  const [users, setUsers] = useState<User[]>([]);
  const [actionName, setactionName] = useState("");
  const [actionType, setActionType] = useState("");
  const [actionParameter, setActionParameter] = useState("");
  const [type, setType] = useState("");
  const [actionValue, setActionValue] = useState("");

  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Inicialmente, o primeiro usuário é selecionado
  const [isCreating, setIsCreating] = useState(false);
  const { language } = useLanguage();

  const { toast } = useToast();
  const [nameSensor, setNameSensor] = useState("");
  const [typeMeasure, setTypeMeasure] = useState("");
  const [deviceDest, setDeviceDest] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://meet.wecom.com.br/api/listUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth": localStorage.getItem("token") || "",
            },
          }
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleActionName = (event: ChangeEvent<HTMLInputElement>) => {
    setactionName(event.target.value);
  };
  const handleActionType = (value: string) => {
    setActionType(value);
  };
  const handleParameterAction = (event: ChangeEvent<HTMLInputElement>) => {
    setActionParameter(event.target.value);
  };
  const handleType = (value: string) => {
    setType(value);
  };
  const handleActionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setActionValue(event.target.value);
  };
  const handleNameSensor = (value: string) => {
    setNameSensor(value);
  };
  const handleTypeMeasure = (value: string) => {
    setTypeMeasure(value);
  };
  const handleUserSelect = (value: string) => {
    const user = users.find((user) => user.id === value);
    console.log(user);
    setSelectedUser(user || null);
  };
  const handleDeviceDest = (value: string) => {
    setDeviceDest(value);
  };

  const shouldRenderInput =
    actionType === "minValue" || actionType === "maxValue";
  const shouldRenderDevice = type === "number";
  const resetForm = () => {
    setactionName("");
    setActionParameter("");
    setActionValue("");
    
  };
  return (
    //div que contem os cards
    <div className="flex flex-col md:flex-row gap-5 justify-center">
      Card criar ação
    </div>
  );
}