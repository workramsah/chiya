import { MdAddShoppingCart } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import Link from "next/link";
export default function Side() {
    return (
        <div className="flex-col space-y-6 w-15  border-r-amber-300 ">
            <div className="flex items-center justify-center text-3xl hover:scale-105 transition ">
                <Link href="/admin/addproduct">
                    <h1><MdAddShoppingCart /></h1>
                </Link>

            </div>
            <Link href="/admin/order">
                <div className="flex items-center justify-center text-3xl hover:scale-105 transition">
                    <h1><FaFileCircleCheck /></h1>
                </div>

            </Link>

        </div>
    )
}