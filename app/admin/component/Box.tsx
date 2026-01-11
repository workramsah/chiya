import Link from "next/link";


export default function Box() {
    return (
        <>
            <div className="bg-gray-300 flex-col justify-evenly w-full space-y-8 px-4">

                <h1 className="font-medium border-b text-[20px] py-4">Order Summary</h1>
                <div className="w-full">
                    <h1 className="font-medium">SELECT ADDRESS</h1>
                    <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" placeholder="Enter address"></input>

                </div>

                <div className="w-full  flex-col ">

                    <h1 className="font-medium">PROMO CODE</h1>
                    <div className="flex-col space-y-3">

                        <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" placeholder="Enter promo code"></input>

                        <div><button className="bg-amber-500 px-6 p-2 hover:bg-amber-600">Add</button></div>
                    </div>
                </div>
                <div className="flex w-full justify-between">
                    <h1 className="font-medium">ITEMS 3</h1>
                    <h1 className="font-medium">Rs 200.00</h1>
                </div>
                <div className="flex w-full justify-between">
                    <h1 className="font-medium">Shipping fee</h1>
                    <h1 className="font-medium">Rs 100.00</h1>
                </div>
                <div className="flex border-b w-full justify-between">
                    <h1 className="font-medium">Tax (2%)</h1>
                    <h1 className="font-medium">Rs 2000.00</h1>
                </div>
                <div className="font-medium w-full flex justify-between">
                    <h1 className="font-medium">Total</h1>
                    <h1 className="font-medium">Rs 2040.00</h1>
                </div>
                <Link href="/admin">
                <button className="w-full bg-amber-400  h-[36px] font-bold hover:bg-amber-500">Place Order</button>
                </Link>
            </div>
        </>
    )
}