/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const table="vote_options"
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([
    {option_id : 1, question_id : 1, option : '東京ディズニーランド', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 2, question_id : 1, option : '東京ディズニシー', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 3, question_id : 1, option : 'ユニバーサル・スタジオ・ジャパン', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 4, question_id : 1, option : 'ハウステンボス', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 1, question_id : 2, option : '北海道', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 2, question_id : 2, option : '東京都', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 3, question_id : 2, option : '愛知県', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 4, question_id : 2, option : '大阪府', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 5, question_id : 2, option : '沖縄県', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 1, question_id : 3, option : '日本酒', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 2, question_id : 3, option : '焼酎', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 3, question_id : 3, option : 'ワイン', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 1, question_id : 4, option : '寿司', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 2, question_id : 4, option : 'ラーメン', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 3, question_id : 4, option : '焼き肉', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 4, question_id : 4, option : 'ハンバーガー', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 5, question_id : 4, option : 'パスタ', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 6, question_id : 4, option : 'ピザ', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 1, question_id : 5, option : 'アメリカ', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 2, question_id : 5, option : 'イギリス', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 3, question_id : 5, option : 'フランス', user_id : 1, updated : '2024-11-01 01:01:01'},
    {option_id : 4, question_id : 5, option : 'イタリア', user_id : 1, updated : '2024-11-01 01:01:01'},
  ]);
};