"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { BillboardsColumns, columns } from "./billboards-columns";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/data-table";
import { ApiList } from "@/components/api-list";

interface BillboardsClientProps {
  data: BillboardsColumns[];
}

export const BillboardsClient = ({ data }: BillboardsClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="label"
        searchPlaceholder="label..."
      />
      <Heading title="API" description="API calls form Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};
