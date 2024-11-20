const table = "user_title";

module.exports = {
    table,

    async new(knex,params) {
        console.log(`---${table}--all--start--id:`);
        return knex(table).insert({user_id: params.user_id, vote_title_id: params.vote_title_id,answer:params.answer}).returning('*')
    },




};
