import { IoPlayCircleOutline } from "react-icons/io5";


interface Props{
  name:string,
}
export default function Heading3(props:Props) {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(0,0,0,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly">
       <h1 className="text-white text-2xl font-bold ">{props.name}</h1>
       <img src="leaf.png"></img>

        <div className="bg-white rounded-full flex items-center space-x-8 p-2  ">
            <h1 className="text-sm font-bold text-gray-400">Explore</h1>
            <div className="h-[20px] w-[21.09px] mt-1"><IoPlayCircleOutline /></div>
        </div>
      </div>
    </>
  );
}
