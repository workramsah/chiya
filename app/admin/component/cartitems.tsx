"use client";
import { useState } from "react";
import Box from "./Box";

interface Props {
  teaname: string;
  teaprice: number;
  teaquantity: number;
  teatotal: number;
}

export default function Cartitems(props: Props) {
  const [data, setData] = useState<number>(props.teaquantity);

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
                
                value={data}
                onChange={(e) => setData(Number(e.target.value))}
                className="w-20 border text-center appearance-none rounded"
              />

              <div className="font-medium">
                ${props.teaprice * data}
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
}
