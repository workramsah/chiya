import Home from "./Home";

export default function Ram(){
    return(
        <>
         <div className="bg-[#F8F7F4] h-[726px] w-full flex flex-col items-center justify-center space-y-[24px] ">
                    <h1 className="font-bold text-[30px]">steep it loose | the tea spot blog</h1>
                    <div className="flex space-x-[24px] ">
                        <Home/><Home/><Home/>
                    </div>
                </div>
        </>
    )
}