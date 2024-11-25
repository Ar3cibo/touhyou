/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const table="vote_questions"
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([
    {id: '1', question: '好きなテーマパークは？',user_id: 1,is_closed:true,updated:'2024-11-01 01:01:01'},
    {id: '2', question: '今一番いきたい場所は？',user_id: 1,is_closed:true,updated:'2024-11-02 01:01:01'},
    {id: '3', question: '好きなお酒は？',user_id: 1,is_closed:true,updated:'2024-11-03 01:01:01'},
    {id: '4', question: "好きな食べ物は？",user_id: 1,is_closed:true,updated:'2024-11-04 01:01:01'},
    {id: '5', question: "住んでみたい国は？",user_id: 1,is_closed:true,updated:'2024-11-05 01:01:01'},
  ]);
};
