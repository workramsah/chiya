import { prisma } from "@/prisma/clients";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  try {
    const id = params.id; 
    const del = await prisma.cart.delete({
      where: { id },
    });

    return NextResponse.json(del);
  } catch (error) {
    console.error(error); 
    return NextResponse.json(
      { message: "Fail to delete" },
      { status: 500 }
    );
  }
}
