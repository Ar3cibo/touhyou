export interface IVoteOption {
  id: number;
  vote_title_id: number;
  title: string;
  count: number;
}

export interface IVoteCard {
  id: number;
  title: string;
  added_user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}