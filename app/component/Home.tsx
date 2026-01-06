
interface Props{
    title:string,
    second:string,
    third:string
}

export default function Home(props:Props){
    return(
        <>
        <div className="w-[559px] h-[373px] space-y-6">
            
            <div className="flex">

            <img  className="w-[268px] h-[373px]" src="women.png"></img>
            <div className="w-[291px] h-[373px] bg-[rgba(51,154,137,1)] flex flex-col justify-center items-center text-white  p-4 text-center">
            <h1 className="text-[30px] font-bold mb-2">{props.title}</h1>
            <h1 className="text-[30px] font-medium">{props.second}</h1>
          </div>
            </div>
            <h1 className="text-sm md:text-left text-gray-700 leading-relaxed max-w-4xl mx-auto text-[16px]">{props.third}</h1>



        </div>
        </>
    )
}