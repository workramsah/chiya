import { Suspense } from "react";
import Detail from "../component/Detail";
import Featured from "../component/Featured";
import Testnav from "../component/Testnav";
import DetailContent from "./DetailContent";

export const dynamic = 'force-dynamic';

export default function Page(){
    return(
        <>
        <Testnav/>
        <div>
            <Suspense fallback={
                <Detail 
                    price={90} 
                    name="Goldern Tea" 
                />
            }>
                <DetailContent />
            </Suspense>
            <Featured/>
        </div>
        </>
    )
}