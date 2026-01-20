import { prisma } from "@/prisma/clients";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    try {

        const Cart = await prisma.cart.findMany();
        return NextResponse.json(Cart);
    } catch (error) {
            return NextResponse.json({message:"Failed to find users"})
    }

}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const cart = await prisma.cart.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(cart);
}

