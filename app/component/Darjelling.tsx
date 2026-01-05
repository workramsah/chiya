import { IoPlayCircleSharp } from "react-icons/io5";
export default function Darjelling() {
  return (
    <div className="relative h-[802px] w-[1920px]">
      <img
        src="darjaling.png"
        className="h-full w-full object-cover"
        alt="Darjeeling"
      />

      <div className="absolute inset-0 left-1/2 top-50 flex flex-col items-center justify-center text-center font-bold text-[56.31px] text-[#FAFAFA] w-[623px] h-[341px] ">
        <h1 >
          Premium tea sourced from Himalayas of Nepal & Darjeeling
        </h1>
        <div><IoPlayCircleSharp /></div>

      </div>
    </div>
  );
}
