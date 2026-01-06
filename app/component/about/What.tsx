import { BsCupHot } from "react-icons/bs";

interface Props{
    name:string,
    description:string
}

export default function What(props:Props){
    return(
        <>
        
    
            <div className="flex flex-col items-center justify-center  space-y-6 h-100 w-100"> 
                <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center">
                    <div ><BsCupHot className="h-10 w-10 text-white"/></div>
                </div>
                <h1 className="font-bold text-[20px]">{props.name}</h1>
                <h1 className="flex items-center text-center">{props.description}</h1>
            </div>
       
        </>
    )
}