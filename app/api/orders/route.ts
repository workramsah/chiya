import { prisma } from "@/prisma/clients";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const body = await request.json();
    const cart = await prisma.order.create({
        data: {
            address: body.address,
            total: body.total,
        }
    });

    return NextResponse.json(cart);
}