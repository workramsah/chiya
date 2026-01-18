"use client"
import { useSearchParams } from "next/navigation";
import Detail from "../component/Detail";
import Featured from "../component/Featured";
import Testnav from "../component/Testnav";

export default function Page(){
    const searchParams = useSearchParams();
    const name = searchParams.get("names");
    const price = searchParams.get("prices");
    return(
        <>
        
        <Testnav/>
        <div>
            <Detail 
                price={price !== null ? Number(price) : 90} 
                name={name !== null ? name : 'Goldern  Tea'} 
            />
            <Featured/>
        </div>
        </>
    )
}