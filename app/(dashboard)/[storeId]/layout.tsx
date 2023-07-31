import Navbar from "@/components/navbar/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();
  const { storeId } = params;

  if (!userId) redirect("/sign-in");

  const store = await prismadb?.store.findFirst({
    where: {
      id: storeId,
      userId: userId,
    },
  });

  if (!store) redirect("/");

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
