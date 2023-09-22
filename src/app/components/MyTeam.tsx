"use client";
import React, { useContext } from "react";

// Context
import { PlayersSelectedContext } from "@/context/teamPlayers.context";

// Icons
import { AiOutlineUser } from "react-icons/ai";

const MyTeam = () => {
  const { players } = useContext(PlayersSelectedContext);

  return (
    <div>
      {players.map((player) => (
        <div
          key={player.id}
          className="flex flex-col items-center border border-light p-1"
        >
          <p className="flex gap-2">
            <span>{player.name}</span>
            <span>$299</span>
          </p>
          <AiOutlineUser size={80} />
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MyTeam;
