"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SizesCellAction } from "./sizes-cell-action";

export type SizesColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const columns: ColumnDef<SizesColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <SizesCellAction data={row.original} />,
  },
];
