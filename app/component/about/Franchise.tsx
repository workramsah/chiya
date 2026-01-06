import Fish from "./Fish";

export default function Franchise() {
    return (
        <>
            <div className="flex flex-col items-center justify-between space-y-[29px]">
                <h1 className="text-[64px] space-x-6"><span className="font-bold">franchise</span><span>Locations</span></h1>


                <div className="flex space-x-[29px]">
                    <Fish name="Nepal" description="Kathmandu Boudha-6"/>
                    <Fish  name="Nepal" description="Kathmandu Boudha-6"/>
                    <Fish name="Nepal" description="Kathmandu Boudha-6"/>
                    <Fish name="Nepal" description="Kathmandu Boudha-6"/>
                    <Fish name="Nepal" description="kathmandu Boudha-6"/>
                </div>
            </div>
        </>
    )
}