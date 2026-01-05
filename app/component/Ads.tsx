import { IoMdArrowDropright } from "react-icons/io";
export default function Ads() {
    return (
        <>
            <div className="bg-[#4B483F] w-full h-[42.39px] flex items-center justify-center space-x-[5px]">
                <h1 className="font-bold text-[12px] text-[#FFFFFF]">BLACK FRIDAY STARTS NOW</h1>
                <IoMdArrowDropright />
                <h1 className="font-bold text-[12px] text-[#FFFFFF]">DISCOUNTS UP TO 40%</h1>
                <IoMdArrowDropright />
                <h1 className="font-bold text-[12px] text-[#FFFFFF]">ENJOY FREE GIFTS AND SAVINGS!</h1>
                <h1 className="font-semibold text-[14px] w-[104.31px] h-[22.39px] bg-[#FFC150] text-[#2E465C] text-center rounded-full">View Specials</h1>

            </div>
        </>
    )
}