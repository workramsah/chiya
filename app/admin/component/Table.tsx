interface Props{
    name:string;
    price:number;
}
export default function Table(props:Props){
    return(
        <>
         <div className="mt-6">

<table className="w-full  border border-gray-300 rounded-lg overflow-hidden shadow-md">
    <thead>
        <tr className="bg-gray-100">
            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Product</th>
            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Name</th>
            <th className="border-b border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="border-b border-gray-300 px-6 py-4"><img src="/cup.png" width={90} className="rounded"></img></td>
            <td className="border-b border-gray-300 px-6 py-4">{props.name}</td>
            <td className="border-b border-gray-300 px-6 py-4">{props.price}</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="border-b border-gray-300 px-6 py-4"><img src="/cup.png" width={90} className="rounded"></img></td>
            <td className="border-b border-gray-300 px-6 py-4">The Eagles</td>
            <td className="border-b border-gray-300 px-6 py-4">1972</td>
        </tr>
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="border-b border-gray-300 px-6 py-4"><img src="/cup.png" width={90} className="rounded"></img></td>
            <td className="border-b border-gray-300 px-6 py-4">Earth, Wind,</td>
            <td className="border-b border-gray-300 px-6 py-4">1975</td>
        </tr>
    </tbody>
</table>

</div>
        </>
    )
}