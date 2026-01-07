import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Tea() {
  return (
    <>
      <div className="relative w-full">
        
        <img
          src="main.png"
          alt="Tea banner"
          className="w-full h-[594px] object-cover"
        />

        
        <div className="absolute top-1/2 left-[8%] -translate-y-1/2">
          <div className="flex flex-col items-start space-y-6 text-white ">
            <h1 className="font-bold text-[51px] leading-tight">
              Tea Loved by our customers <br />
              sip with purpose
            </h1>

              <Link target="_blank" rel="noopener noreferrer" href={"https://ekcupchiya.tripverticals.com/shop/?max_price=1407"}>
            <div className="flex items-center bg-[#FFC150] w-[190px] h-[52px] justify-center space-x-4 rounded-full font-bold text-[16px] text-black cursor-pointer hover:scale-105 transition">
              <span>sip the best</span>
              <MdOutlineArrowOutward className="text-xl" />
            </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
