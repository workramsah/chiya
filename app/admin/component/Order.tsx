
interface Props{
    name:string,
}

export default function Order(props:Props) {
    return (
        <>
            <div>
                
                <div className="flex   justify-evenly space-y-4 space-x-6 md:space-y-0 w-full border-b">
                    <div className="flex space-x-4 items-center">

                        <img src="/cup.png" className="w-20"></img>


                        <div className="flex flex-col space-y-2 ">
                            <h1 className="font-medium">Stylish Earrings x 1</h1>
                            <h1>Items:1</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium">{props.name}</h1>
                        <h1>Birgunj</h1>
                        <h1>Radhemai 13, 02</h1>
                        <h1>9744201315</h1>
                    </div>
                    <h1 className="font-medium">61</h1>
                    <div>
                        <h1>Method:COD</h1>
                        <h1>Date:1/6/2026</h1>
                        <h1>Payment:Pending</h1>
                    </div>
                </div>
            </div>
        </>
    )
}