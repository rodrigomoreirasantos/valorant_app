import { NextResponse } from "next/server";

import { prisma } from "../../lib/prisma";

export async function GET() {
  //   const players = await prisma.players.findMany();

  return NextResponse.json("<h1>hello wolrd</h1>", { status: 200 });
}
