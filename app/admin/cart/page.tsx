
import { FaLongArrowAltLeft } from "react-icons/fa";
import Box from "../component/Box";
export default function Page() {
    return (
        <>
            <div className="md:flex md:space-x-6 mx-4">

                <div className="md:w-2/3">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h1 className="text-2xl">Your Cart</h1>
                        <h1 className="font-medium">2 items</h1>
                    </div>

               
                    <div className="md:hidden p-4 space-y-4">
                        <div className="flex items-center space-x-4 border rounded p-3">
                            <img src="/cup.png" width={70} alt="cup" />
                            <div className="flex-1">
                                <div className="text-sm font-medium">Product Name</div>
                                <div className="text-sm text-gray-500">$200</div>
                                <div className="mt-2 flex items-center justify-between">
                                    <input type="number" min="1" defaultValue={1} className="w-20 border text-center appearance-none rounded" />
                                    <div className="font-medium">$200</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 border rounded p-3">
                            <img src="/cup.png" width={70} alt="cup" />
                            <div className="flex-1">
                                <div className="text-sm font-medium">Product Name</div>
                                <div className="text-sm text-gray-500">$200</div>
                                <div className="mt-2 flex items-center justify-between">
                                    <input type="number" min="1" defaultValue={1} className="w-20 border text-center appearance-none rounded" />
                                    <div className="font-medium">$200.00</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 border rounded p-3">
                            <img src="/cup.png" width={70} alt="cup" />
                            <div className="flex-1">
                                <div className="text-sm font-medium">Product Name</div>
                                <div className="text-sm text-gray-500">$300</div>
                                <div className="mt-2 flex items-center justify-between">
                                    <input type="number" min="1" defaultValue={2} className="w-20 border text-center appearance-none rounded" />
                                    <div className="font-medium">$600</div>
                                </div>
                            </div>
                        </div>
                    </div>

               
                    <div className="hidden md:block">
                        <table className="table-auto w-full">
                            <thead className="w-full text-center ">
                                <tr>
                                    <th className="text-left">Product Details</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="w-full text-center ">
                                <tr className="align-top">
                                    <td className="text-left flex items-center space-x-4"><img src="/cup.png" width={70} alt="cup" /><span className="font-medium">Product Name</span></td>
                                    <td>$200</td>
                                    <td><input type="number" min="1" defaultValue={1} className="w-16 border text-center rounded appearance-none" /></td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <td className="text-left flex items-center space-x-4"><img src="/cup.png" width={70} alt="cup" /><span className="font-medium">Product Name</span></td>
                                    <td>$200</td>
                                    <td><input type="number" min="1"  className="w-16 border text-center rounded appearance-none" /></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td className="text-left flex items-center space-x-4"><img src="/cup.png" width={70} alt="cup" /><span className="font-medium">Product Name</span></td>
                                    <td>$300</td>
                                    <td><input type="number" min="1"  className="w-16 border text-center rounded appearance-none" /></td>
                                    <td>$600</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center mt-4 space-x-4 text-amber-300">
                        <FaLongArrowAltLeft />
                        <h1 className="font-medium">Continue Shopping</h1>
                    </div>


                </div>

                <div className="md:w-1/3 md:mt-0 mt-6">
                    <Box />
                </div>
            </div>
        </>
    )
}