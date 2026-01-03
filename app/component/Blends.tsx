import Cup from "./Cup";

export default function Blends(){
    return(
        <>
        <div className="flex flex-col items-center space-y-[60px]">
            <h1 className="font-bold text-[30px]">Blends Tea</h1>
            <div className="flex">
                <Cup/>
                <Cup/>
                <Cup/>
                <Cup/>
            </div>

        </div>
        </>
    )
}