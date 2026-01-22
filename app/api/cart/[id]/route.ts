import { prisma } from "@/prisma/clients";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";


export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await context.params;
  const id = resolvedParams.id?.trim();

    if (!id) {
      return NextResponse.json({ message: "Cart id is required" }, { status: 400 });
    }

    const uuidV4 =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidV4.test(id)) {
      return NextResponse.json(
        { message: "Invalid cart id. Expected a UUID." },
        { status: 400 }
      );
    }

    const del = await prisma.cart.delete({
      where: { id },
    });

    return NextResponse.json(del, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Cart item not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Failed to delete cart item" },
      { status: 500 }
    );
  }
}
