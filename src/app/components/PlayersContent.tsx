"use client";
import React, { useContext } from "react";

// Icons
import { AiOutlineUser } from "react-icons/ai";

// Types
import { PlayersType } from "../types/player";

// Components
import { PlayersSelectedContext } from "@/context/teamPlayers.context";

const PlayersContent = (player: PlayersType) => {
  const { teamPlayersSelected } = useContext(PlayersSelectedContext);

  const handlePlayerSelected = (player: any) => {
    teamPlayersSelected(player);
  };

  return (
    <div
      className="flex flex-col items-center border border-dark p-1"
      onClick={() => handlePlayerSelected(player)}
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
