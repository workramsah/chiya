import { prisma } from "@/prisma/clients";
import CartWrapper from "../component/CartWrapper";

export default async function Page() {
  const data = await prisma.cart.findMany();

  return <CartWrapper cartData={data} />;
}