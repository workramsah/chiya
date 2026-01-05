import Fish from "./Fish";

export default function Certifications(){
    return(
        <>
        <div className="flex flex-col items-start justify-evenly space-y-[29px]">
            <h1 className="font-bold text-[64px]">Certifications & Quality</h1>
            <h1 className="text-[20px] w-[564px]">Excellence is our baseline. Our teas align with international standards and undergo independent lab testing for purity, safety, and flavor integrity. Where applicable, our products and partners maintain:</h1>
            <div className="flex space-x-[29px]">
                <Fish/><Fish/><Fish/><Fish/><Fish/>
            </div>
        </div>
        </>
    )
}