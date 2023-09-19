"use client";

import { createContext, useState } from "react";

interface ChildrenProp {
  children: React.ReactNode;
}

interface PlayersTeamProp {
  teamPlayersSelected: (playerId: string) => void;
  players: string[];
}

export const PlayersSelectedContext = createContext<PlayersTeamProp>({
  players: [],
  teamPlayersSelected: () => {},
});

const PlayerSelectedContextProvider = ({ children }: ChildrenProp) => {
  const [players, setPlayers] = useState<any>([]);

  const teamPlayersSelected = (playerId: string) => {
    setPlayers([...players, playerId]);
  };

  return (
    <PlayersSelectedContext.Provider value={{ players, teamPlayersSelected }}>
      {children}
    </PlayersSelectedContext.Provider>
  );
};

export default PlayerSelectedContextProvider;
