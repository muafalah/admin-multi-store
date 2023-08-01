"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BillboardsCellAction } from "./billboards-cell-action";

export type BillboardsColumns = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardsColumns>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <BillboardsCellAction data={row.original} />,
  },
];
