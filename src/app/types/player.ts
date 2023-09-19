export interface PlayersType {
  country: string;
  id: string;
  imageUrlPlayer: string;
  name: string;
  org: string;
  onClick: (playerId: string) => void;
}
