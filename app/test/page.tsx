"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Cartitems from "../admin/component/cartitems";
import Box from "../admin/component/Box";


interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface Props {
  cartData: CartItem[];
}

export default function CartWrapper({ cartData = [] }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    cartData.forEach((item) => {
      initial[item.id] = 1;
    });
    return initial;
  });

  const updateQuantity = (itemId: string, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, quantity),
    }));
  };

  const { subtotal, tax, shipping, total, totalItems } = useMemo(() => {
    const subtotal = cartData.reduce(
      (sum, item) => sum + item.price * (quantities[item.id] || 1),
      0
    );
    const shipping = 100;
    const tax = subtotal * 0.02;
    const total = subtotal + shipping + tax;
    const totalItems = Object.values(quantities).reduce(
      (sum, qty) => sum + qty,
      0
    );

    return { subtotal, tax, shipping, total, totalItems };
  }, [cartData, quantities]);

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
                onQuantityChange={updateQuantity}
              />
            ))}
            <Link href="/">
              <h1 className="font-semibold cursor-pointer text-amber-400">
                Back to shop
              </h1>
            </Link>
          </div>
          <Box
            items={totalItems}
            subtotal={subtotal}
            tax={tax}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </>
  );
}
