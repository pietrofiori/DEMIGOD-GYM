import React, { useEffect } from "react";
import { columnsAccount } from "@/DataTable-shadcn/ColumnsAccount";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/DataTable-shadcn/data-tableAccount";
import { host } from "@/App";
import { useAccounts } from "@/components/account/AccountContext";
export default function AccountsPage() {
  const columnsaccount = columnsAccount; // Certifique-se de que ColumnsActions esteja correto
 const {accounts} = useAccounts()

  return (
    <div className="px-2 flex flex-col gap-4 justify-center sm:mx-[5px] md:mx-[100px] lg:mx-[150px]">
            <h1 className="text-3xl">Contas</h1>
      <ScrollArea className="h-[500px]">
        <DataTable columns={columnsaccount} data={accounts} />
      </ScrollArea>
    </div>
  );
}
