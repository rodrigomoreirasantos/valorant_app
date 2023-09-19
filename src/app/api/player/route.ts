import { NextResponse } from "next/server";

import { prisma } from "../../lib/prisma";

export async function GET() {
  const players = await prisma.players.findMany();

  return new NextResponse(JSON.stringify(players), { status: 200 });
}
