"use client";

import { PlayersInfoProp } from "@/app/types/player";
import { createContext, useState } from "react";

interface ChildrenProp {
  children: React.ReactNode;
}

interface PlayersTeamProp {
  teamPlayersSelected: (playerInformation: string[]) => void;
  players: PlayersInfoProp[];
}

export const PlayersSelectedContext = createContext<PlayersTeamProp>({
  players: [],
  teamPlayersSelected: () => {},
});

const PlayerSelectedContextProvider = ({ children }: ChildrenProp) => {
  const [players, setPlayers] = useState<PlayersInfoProp[]>([]);

  const teamPlayersSelected = (playerInformation: any) => {
    const foundPlayer = players.find(
      (player) => player.id === playerInformation.id
    );

    if (foundPlayer !== undefined) {
      console.log("Player ja adicionado");
    } else {
      setPlayers([...players, playerInformation]);
    }
  };

  return (
    <PlayersSelectedContext.Provider value={{ players, teamPlayersSelected }}>
      {children}
    </PlayersSelectedContext.Provider>
  );
};

export default PlayerSelectedContextProvider;
