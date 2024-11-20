const table = "vote_title";

module.exports = {
    table,

    async all(knex) {
        console.log(`---${table}--all--start--id:`);
        return await knex(table).select("*").where({is_closed: false})
    },

    async find(knex, id) {
        console.log(`---${table}--find--start--id:`,id);
        return await knex.select("*").from(`${table} as T`).where({id})
            .join('options as O','O.vote_title_id','T.id')
    },



};
