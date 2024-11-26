/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const table="vote_options"
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([
    {option_id: 1, question_id:1, option:'ディズニー',user_id:1,updated:'2024-11-01 01:01:01'},
    {option_id: 1, question_id:2, option:'イタリア',user_id:1,updated:'2024-11-02 02:02:02'},
    {option_id: 1, question_id:3, option:'ビール',user_id:2,updated:'2024-11-03 03:03:03'},
    {option_id: 2, question_id:1, option:'ユニバ',user_id:2,updated:'2024-11-04 04:04:04'},
    {option_id: 2, question_id:2, option:'北海道',user_id:3,updated:'2024-11-05 05:05:05'},
  ]);
};