"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import PlayersContent from "./PlayersContent";
import { PlayersType } from "../types/player";

const CardPlayer = () => {
  const [openPlayers, setOpenPlayers] = useState(false);
  const [players, setPlayers] = useState<PlayersType[]>([]);
  const handleOpenPlayers = () => {
    setOpenPlayers(!openPlayers);
  };

  useEffect(() => {
    fetch("/api/player")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [openPlayers]);

  return (
    <div className="container w-auto h-screen flex justify-center items-start mt-2">
      <div className=" flex flex-col h-[calc(100vh-100px)] justify-between items-center w-full">
        <button
          onClick={handleOpenPlayers}
          className="p-3 w-1/2 border border-light rounded-full hover:bg-light hover:text-dark"
        >
          ADD PLAYER
        </button>

        <div className="w-full">
          {openPlayers && (
            <div className="h-40 px-3 bg-light text-dark flex justify-center items-center gap-5 rounded-t-xl cursor-pointer">
              {players.map((player) => (
                <PlayersContent key={player.id} {...player} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex-col items-center justify-center">
        <Image
          src="https://live.staticflickr.com/65535/53195980782_d5393d7a9a_z.jpg"
          alt="teste aspas"
          width="400"
          height="400"
        />
        <div className="flex items-center justify-center">
          <p className="text-red-500 relative bottom-52 right-36">LOUD</p>
          <p className="text-red-500 relative bottom-5">ASPAS</p>
        </div>
      </div> */}
    </div>
  );
};

export default CardPlayer;
