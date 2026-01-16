import Cup from "./Cup";

export default function Featured(){
    return(
        <>
        <div>
        <div className="flex justify-center "><span className="font-bold text-2xl">Featured</span> <span className="font-bold text-2xl text-amber-400">Products</span></div>
        
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-3">
            <Cup  price={33}  name="tea"/>
            <Cup  price={33}  name="tea"/>
            <Cup  price={33}  name="tea"/>
            
            <Cup  price={33}  name="tea"/>
            <Cup  price={33}  name="tea"/>
            <Cup  price={33}  name="tea"/>
        </div>
        </div>
        </>
    )
}