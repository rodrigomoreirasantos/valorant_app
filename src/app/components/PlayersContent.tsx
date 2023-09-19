"use client";
import React, { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { PlayersType } from "../types/player";

const PlayersContent = (player: PlayersType) => {
  const [playerSelected, setPlayerSelected] = useState<any[]>([]);

  const handlePlayerSelected = (playerId: any) => {
    setPlayerSelected([...playerSelected, playerId]);
    console.log(playerSelected);
  };
  return (
    <div
      className="flex flex-col items-center border border-dark p-1"
      onClick={() => handlePlayerSelected(player.id)}
    >
      <p className="flex gap-2">
        <span>{player.name}</span>
        <span>$299</span>
      </p>
      <AiOutlineUser size={80} />
      <p>{player.name}</p>
    </div>
  );
};

export default PlayersContent;
