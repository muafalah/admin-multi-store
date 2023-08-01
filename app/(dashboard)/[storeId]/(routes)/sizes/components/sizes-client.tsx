"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { SizesColumn, columns } from "./sizes-columns";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/data-table";
import { ApiList } from "@/components/api-list";

interface SizesClientProps {
  data: SizesColumn[];
}

export const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="name..."
      />
      <Heading title="API" description="API calls form Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
