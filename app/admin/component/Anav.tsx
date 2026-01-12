import Link from "next/link";

export default function Anav() {
    return (
        <>
            <div className="flex text-white  justify-between  items-center px-4  h-20 border-b w-full bg-blue-800">
                <h1 className="text-2xl font-semibold">Admin Pannel</h1>
                <Link href="/">
                    <h1 className="bg-gray-500 py-2 px-6 rounded-full ">Logout</h1>

                </Link>
            </div>
        </>
    )
}