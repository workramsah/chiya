import Cup from "../component/Cup";

export default function Page(){
    return(
        <>
        
        <div className="flex flex-col items-center space-y-[60px] w-full">
            <h1 className="font-bold text-[30px]">Blends Tea</h1>
            <div className="flex overflow-x-auto w-full">
                <Cup name="Himalyan Goldern" price={600}/>
                <Cup name="Himalayan Black" price={450}/>
                <Cup name="Himalayan Goldern" price={300}/>
                <Cup name="Himalayan Green" price={200}/>
                <Cup name="Himalayan Green" price={200}/>
                <Cup name="Himalayan Green" price={200}/>
            </div>

        </div>
        </>
    )
}