
interface Props{
    name:string;
    price:number;
    date:Date;
}

export default function Order(props:Props) {
    return (
        <>
            
                
                <div className="flex   justify-evenly space-y-4 space-x-6 md:space-y-0 w-full border-b">
                    <div className="md:flex space-x-4 items-center flex-col">

                        <img src="/cup.png" className="w-20"></img>


                        <div className="flex flex-col space-y-2 ">
                            <h1 className="font-medium">Name</h1>
                            <h1>Items:1</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium">{props.name}</h1>
                        <h1>Birgunj</h1>
                        <h1>{props.name}</h1>
                        <h1>9744201315</h1>
                    </div>
                    <h1 className="font-medium">61</h1>
                    <div>
                        <h1>Method:COD</h1>
                        <h1>Date:{props.date.toLocaleDateString()}</h1>
                        <h1>Payment:${props.price}</h1>
                    </div>
                </div>
            
        </>
    )
}