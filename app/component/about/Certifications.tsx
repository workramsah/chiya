import Fish from "./Fish";

export default function Certifications(){
    return(
        <>
        <div className="flex flex-col items-start justify-evenly space-y-[29px]">
            <h1 className=" text-[64px]"><b>Certifications &</b><br/> Quality</h1>
            <h1 className="text-[20px] w-[564px]">Excellence is our baseline. Our teas align with international standards and undergo independent lab testing for purity, safety, and flavor integrity. Where applicable, our products and partners maintain:</h1>
            <div className="flex space-x-[29px] items-center">
                <Fish name="Organic & Chemical-Free Cultivation" description="protecting soil life and water purity."/>
                <Fish name="Pure & Chemical-Free Cultivation" description="protecting soil life and water purity."/>
                <Fish name="100% & Chemical-Free Cultivation" description="protecting environment life and water purity."/>
                <Fish name="Fine & Chemical-Free Cultivation" description="protecting soil life and water purity."/>
                <Fish name="lab & Chemical Free Cultivation" description="protecting organic soil life and water purity"/>
            </div>
        </div>
        </>
    )
}