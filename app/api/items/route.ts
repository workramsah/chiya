import { prisma } from "@/prisma/clients";
import { NextResponse } from "next/server";

export async function GET(){
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request: Request){
    const body = await request.json();
    const item = await prisma.items.create({
        data: {
            name: body.name,
            price: body.price,
        },
    });
    return NextResponse.json(item);
}