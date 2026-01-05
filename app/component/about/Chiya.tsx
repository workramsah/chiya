import What from "./What";

export default function Chiya(){
    return(
        <>
        <div className="flex flex-col items-center justify-evenly">
            <h1 className=" text-[64px]"><b>What</b> We Do</h1>
            
            <div className="flex justify-center space-x-10">
            <What/><What/><What/><What/>

            </div>

        </div>
        </>
    )
}