import Cup from "./Cup";

export default function Bigcup(){
    return(
        <>
        <div className="w-full h-[646.27px] flex items-center justify-center space-x-[24px] no-scrollbar overflow-x-auto">
            <Cup name="Himalayan Golden" price={795}></Cup>
            <Cup name="Himalayan Black" price={500}></Cup>
            <Cup name="Himalyan Green" price={400}></Cup>
            <Cup name="Himalayan White" price={300}></Cup>
            <Cup name="Himalayan Orange" price={200}></Cup>
            <Cup name="Himalayan Purple" price={600}></Cup>
            <Cup name="Himalayan Silver" price={900}></Cup>
            <Cup name="Tea form Himalayan" price={300}></Cup>
        </div>
        </>
    )
}