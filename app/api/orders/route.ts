import { prisma } from "@/prisma/clients";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const namesValue =
    Array.isArray(body.names) ? body.names.join(", ") : body.names ?? "";
  const cart = await prisma.order.create({
    data: {
      address: body.address,
      total: Math.round(Number(body.total)),
      // Prisma schema has items/names; run `npx prisma generate` if TS complains
      items: Math.round(Number(body.items)) || 0,
      names: String(namesValue),
    } as { address: string; total: number; items: number; names: string },
  });

  return NextResponse.json(cart);
}