"use client";

import { OrdersColumns, columns } from "./orders-columns";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/data-table";

interface OrdersClientProps {
  data: OrdersColumns[];
}

export const OrdersClient = ({ data }: OrdersClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="products"
        searchPlaceholder="product..."
      />
    </>
  );
};
