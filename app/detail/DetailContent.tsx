"use client"
import { useSearchParams } from "next/navigation";
import Detail from "../component/Detail";

export default function DetailContent(){
    const searchParams = useSearchParams();
    const name = searchParams.get("names");
    const price = searchParams.get("prices");
    
    return (
        <Detail 
            price={price !== null ? Number(price) : 90} 
            name={name !== null ? name : 'Goldern  Tea'} 
        />
    )
}
