import { NextResponse } from "next/server";
import React from "react";

import { AiOutlineUser } from "react-icons/ai";

const getPlayers = async () => {
  const res = await fetch("/api/players");
  const data = await res.json();

  return NextResponse.json(data);
};

const PlayersContent = async () => {
  const data = await getPlayers();
  return (
    <div className="h-40 px-3 bg-light text-dark flex items-center jus">
      <div className="flex flex-col items-center">
        <p className="flex gap-2">
          {/* <span>{data}</span> */}
          <span>$299</span>
        </p>
        <AiOutlineUser size={80} />
        <p>Aspas</p>
      </div>
    </div>
  );
};

export default PlayersContent;
