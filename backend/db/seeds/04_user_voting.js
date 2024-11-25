/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const table="user_voting"
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([
    {user_id: 1, question_id: 1,option_id:1},
    {user_id: 2, question_id: 1,option_id:1},
    {user_id: 3, question_id: 1,option_id:2},
    {user_id: 1, question_id: 2,option_id:2},
    {user_id: 2, question_id: 2,option_id:1},
    {user_id: 3, question_id: 2,option_id:2},
  ]);
};