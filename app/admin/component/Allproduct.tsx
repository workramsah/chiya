import { prisma } from "@/prisma/clients"

export default async function Allorders() {
   const Items = await prisma.items.findMany();
    return (

        <div>
            <div>
                <h1 className="text-2xl font-semibold">All Product</h1>
            </div>
            <div className="mt-6">

                <table className="w-full  border border-gray-300 rounded-lg overflow-hidden shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Product</th>
                            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Price</th>
                            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Items.map((item)=>(


                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="border-b border-gray-300 px-6 py-4"><img src="/cup.png" width={90} className="rounded"></img></td>
                            <td className="border-b border-gray-300 px-6 py-4">{item.name}</td>
                            <td className="border-b border-gray-300 px-6 py-4">${item.price}</td>
                        </tr>
                            ))
                        }
                        
                    </tbody>
                </table>

            </div>
        </div>


    )
}