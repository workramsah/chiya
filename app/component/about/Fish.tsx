
interface Props{
    name:string,
    description:string,
}

export default function Fish(props:Props){
    return(
        <>
        <div className="flex flex-col items-center justify-between  w-60 space-y-[10px] mb-2 hover:scale-105 transition hover:shadow">
        <img src="about/fish.png" className="w-[228.45px] h-[228.45px]"></img>
        <div className="space-y-[1px]">
        <h1 className="font-bold text-[20px]">{props.name}</h1>
        <h1 className="text-[15.38px]">{props.description}</h1>
        </div>

        </div>
        </>
    )
}