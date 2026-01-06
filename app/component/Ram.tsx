import Home from "./Home";

export default function Ram(){
    return(
        <>
         <div className="bg-[#F8F7F4] h-[726px] w-full flex flex-col items-center justify-center space-y-[24px] ">
                    <h1 className="font-bold text-[30px]">steep it loose | the tea spot blog</h1>
                    <div className="flex space-x-[24px] ">
                        <Home title="steep it loose " second=" the tea spot blog" third="We're with you through every sip of the day. From bold beginnings to soothing sunsets, our fresh, small-batch teas are here to match every moment with authenticity and care. Embrace the fullness of life with us."/>
                        <Home title="sleep it win" second="the cup spot blog" third="We're with you through every sip of the day. From bold beginnings to soothing sunsets, our fresh, small-batch teas are here to match every moment with authenticity and care. Embrace the fullness of life with us."/>
                    </div>
                </div>
        </>
    )
}