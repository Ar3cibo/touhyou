export interface IVoteOption {
  option_id: number;
  question_id: number;
  option: string;
  count: number;
}

export interface IVoteCard {
  question_id: number;
  question: string;
  user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}