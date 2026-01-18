"use client";
import { useState } from "react";


interface Props {
  teaname: string;
  teaprice: number;
 
}

export default function Cartitems(props: Props) {
  const [datas, setData] = useState<number>(1);

  return (
    <>
      
        <div className="flex items-center space-x-4 border rounded p-3 w-full">
          <img src="/cup.png" width={70} alt="cup" />

          <div className="flex-1">
            <div className="text-sm font-medium">{props.teaname}</div>
            <div className="text-sm text-gray-500">${props.teaprice}</div>

            <div className="mt-2 flex items-center justify-between">
              <input
                type="number"
                
                value={datas}
                onChange={(e) => setData(Number(e.target.value))}
                className="w-20 border text-center appearance-none rounded"
              />

              <div className="font-medium">
                ${props.teaprice * datas }
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
}
