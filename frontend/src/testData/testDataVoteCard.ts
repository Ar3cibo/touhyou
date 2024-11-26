import {IVoteCard, IVoteOption} from "../globals";

export const option_1:IVoteOption = {
  option_id: 1,
  question_id: 4,
  option: '寿司',
  count: 0
}

export const option_2:IVoteOption = {
  option_id: 2,
  question_id: 4,
  option: 'ラーメン',
  count: 2,
}

export const option_3:IVoteOption = {
  option_id: 3,
  question_id: 3,
  option: '焼き肉',
  count: 0
}

export const option_4:IVoteOption = {
  option_id: 4,
  question_id: 4,
  option: 'ハンバーガー',
  count: 4
}

export const option_5:IVoteOption = {
  option_id: 5,
  question_id: 4,
  option: 'パスタ',
  count: 0
}

export const option_6:IVoteOption = {
  option_id: 6,
  question_id: 4,
  option: 'ピザ',
  count: 0
}

export const testVoteCard:IVoteCard = {
  question_id: 4,
  question: '好きな食べ物は？',
  user_id: 1,
  is_closed: false,
  updated: new Date('2024-11-26'),
  options: [
    option_1,
    option_2,
    option_3,
    option_4,
    option_5,
    option_6
  ]
}

