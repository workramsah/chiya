"use client";

interface Props {
  itemId: string;
  teaname: string;
  teaprice: number;
  quantity: number;
  onQuantityChange: (itemId: string, quantity: number) => void;
}

export default function Cartitems(props: Props) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    props.onQuantityChange(props.itemId, newQuantity);
  };

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
              min="1"
              value={props.quantity}
              onChange={handleQuantityChange}
              className="w-20 border text-center appearance-none rounded"
            />

            <div className="font-medium">
              ${props.teaprice * props.quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
