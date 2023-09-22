export interface PlayersType {
  country: string;
  id: string;
  imageUrlPlayer: string;
  name: string;
  org: string;
  onClick: (playerId: string) => void;
}

export interface PlayersInfoProp {
  id: string;
  name: string;
  country: string;
  org: string;
  imageUrlPlayer: string;
}
