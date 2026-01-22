import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

interface BagProps {
  cartCount: number;
}

export default function Bag({ cartCount }: BagProps) {
  return (
    <>
      <Link href="/admin/cart">
        <div className="relative">
          {cartCount > 0 && (
            <h1 className="absolute text-red-600 bg-amber-400 rounded-full w-5 text-center -top-3 text-sm left-3">
              {cartCount}
            </h1>
          )}
          <BsHandbag className="h-[21px] w-[21px]" />
        </div>
      </Link>
    </>
  );
}