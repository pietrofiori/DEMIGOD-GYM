import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Pencil } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import React, { useEffect, useState, ChangeEvent, useContext } from "react";

  interface Actions {
    id: string;
    action_name: string;
    action_alarm_code: string;
    action_start_type: string;
    action_prt: string;
    action_user: string;
    action_type: string; // o ? significa que o valor nao precisa ser presente , se for nulo nao tem problema
    action_device?: string | null;
    action_sensor_name?: string | null;
    action_sensor_type?: string | null;
    createdAt: string;
    updatedAt: string;
  }
  interface UpdateActionsProps {
    action: Actions;
  }
  export default function UpdateActions ({ action }: UpdateActionsProps) {
    return(
      <div>
        Atualizar ações
      </div>
    )
  }