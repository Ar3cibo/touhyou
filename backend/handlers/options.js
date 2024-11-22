const table = "options";

module.exports = {
    table,
    async new(knex, params) {
        console.log(`---${table}--new--start--`);
        let newNum = await knex(table)
            .where({'vote_title_id': params.vote_title_id}).max('option_number').first()
        newNum = newNum.max + 1

        console.log('max',newNum)
        return  knex(table).insert({
            user_id: params.user_id,
            vote_title_id: params.vote_title_id,
            option_number: newNum,
            question: params.question,
            updated: new Date()
        }).returning('*')
    },

}