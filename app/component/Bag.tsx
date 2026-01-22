import { prisma } from "@/prisma/clients";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

export default async function Bag(){
    const data= await prisma.order.findMany();
    return(
        <>
        <Link href="/admin/cart">
            <div className="relative">
              {data.map((dat)=>(

              <h1 key={dat.id} className="absolute text-red-600 bg-amber-400 rounded-full w-5 text-center -top-3 text-sm left-3">{dat.items}</h1>
              ))}
            <BsHandbag className="h-[21px] w-[21px]" />
            </div>
            </Link>
        </>
    )
}