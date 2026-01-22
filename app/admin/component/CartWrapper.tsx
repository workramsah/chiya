"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Cartitems from "./cartitems";
import axios from "axios";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface Props {
  cartData: CartItem[];
}

export default function CartWrapper({ cartData }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    cartData.forEach((item) => {
      initial[item.id] = 1;
    });
    return initial;
  });

  const [value, setValue] = useState("");

  const updateQuantity = (itemId: string, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, quantity),
    }));
  };

  const { subtotal, tax, shipping, totala, totalItems } = useMemo(() => {
    const subtotal = cartData.reduce(
      (sum, item) => sum + item.price * (quantities[item.id] || 1),
      0
    );
    const shipping = 100;
    const tax = subtotal * 0.02;
    const totala = subtotal + shipping + tax;
    const totalItems = Object.values(quantities).reduce(
      (sum, qty) => sum + qty,
      0
    );

    return { subtotal, tax, shipping, totala, totalItems };
  }, [cartData, quantities]);

  async function handle() {
    try {
      await axios.post("/api/orders", {
        address: value,
        total: totala,
        items: totalItems,
        names: cartData.map((dat) => dat.name),
      });
      toast.success("Order Placed");

    } catch (error) {
      toast.error("Failed To Placed Order")
    }
  }
  return (
    <>
      <div>
        <div className="p-4 border-b flex justify-between items-center">
          <h1 className="text-2xl">Your Cart</h1>
          <h1 className="font-medium">{totalItems} items</h1>
        </div>
        <div className="md:flex space-x-3 space-y-3">
          <div className="w-full space-y-3">
            {cartData.map((dat) => (
              <Cartitems
                key={dat.id}
                itemId={dat.id}
                teaname={` ${dat.name} `}
                teaprice={dat.price}
                quantity={quantities[dat.id] || 1}
                onQuantityChange={updateQuantity} ids={` ${dat.id}`}
              />
            ))}
            <Link href="/">
              <h1 className="font-semibold cursor-pointer text-amber-400">
                Back to shop
              </h1>
            </Link>
          </div>
          <div className="bg-amber-300 flex-col justify-evenly w-full space-y-8 px-4">
            <h1 className="font-medium border-b text-[20px] py-4">Order Summary</h1>
            <div className="w-full">
              <h1 className="font-medium">SELECT ADDRESS</h1>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}

                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                placeholder="Enter address" required
              ></input>
            </div>

            <div className="w-full flex-col">
              <h1 className="font-medium">PROMO CODE</h1>
              <div className="flex-col space-y-3">
                <input

                  className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                  placeholder="Enter promo code"
                ></input>
                <div>
                  <button className="bg-amber-500 px-6 p-2 hover:bg-amber-600">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="font-medium">ITEMS {totalItems}</h1>
              <h1 className="font-medium">${subtotal.toFixed(2)}</h1>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="font-medium">Shipping fee</h1>
              <h1 className="font-medium">${shipping.toFixed(2)}</h1>
            </div>
            <div className="flex border-b w-full justify-between">
              <h1 className="font-medium">Tax (2%)</h1>
              <h1 className="font-medium">${tax.toFixed(2)}</h1>
            </div>
            <div className="font-medium w-full flex justify-between">
              <h1 className="font-medium">Total</h1>
              <h1 className="font-medium">${totala.toFixed(2)}</h1>
            </div>
            {/* <Link href="/admin/order"> */}
            <button onClick={handle} className="w-full bg-amber-400 h-[36px] font-bold hover:bg-amber-500">
              Place Orders
            </button>
            {/* </Link> */}
            <h1>all given values are {value}</h1>
          </div>

        </div>
      </div>
    </>
  );
}
