

export default function Nav(){
    return(
        <>
        <div className="bg-white  flex justify-between m-5 items-center">
            <div className="flex space-x-5">
            <h1>About us</h1>
            <h1>Tea Product</h1>
            </div>


            <div className="flex space-x-5 items-center">
            <h1>Blog</h1>
            <h1>Contact</h1>
            <h1 className="font-light bg-amber-400 text-sm p-1 rounded-2xl">franchise Opportunity</h1>
            <img src="SVG.png" className="size-min "></img>
            <img src="SVG (1).png" className="size-min "></img>
            <img src="Link.png" className="size-min "></img>
            
            
            


            </div>
        </div>
        </>
    )
}