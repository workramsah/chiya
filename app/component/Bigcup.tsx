import { prisma } from "@/prisma/clients";
import Cup from "./Cup";

export default async function Bigcup(){
    const data = await prisma.items.findMany();
    return(
        <>
        <div className="w-full h-[646.27px] flex items-center justify-center space-x-[24px] no-scrollbar overflow-x-auto">
            {
                data.map((dat)=>(

                    <Cup key={dat.id} name={` ${dat.name} `} price={dat.price}></Cup>
                ))
            }
           
        </div>
        </>
    )
}