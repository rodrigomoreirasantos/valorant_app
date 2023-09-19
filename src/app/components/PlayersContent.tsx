"use client";
import React, { useContext, useEffect, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { PlayersType } from "../types/player";
import { PlayersSelectedContext } from "@/context/teamPlayers.context";

const PlayersContent = (player: PlayersType) => {
  const { players, teamPlayersSelected } = useContext(PlayersSelectedContext);

  const handlePlayerSelected = (playerId: any) => {
    teamPlayersSelected(playerId);
  };

  useEffect(() => {
    console.log(players);
  }, [players]);
  return (
    <div
      className="flex flex-col items-center border border-dark p-1"
      onClick={() => handlePlayerSelected(player.name)}
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
