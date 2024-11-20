const table = "vote_title";

module.exports = {
    table,

    async all(knex) {
        console.log(`---${table}--all--start--id:`);
        return await knex(table).select("*").where({is_closed: false})
    },

    async find(knex, id) {
        console.log(`---${table}--find--start--id:`,id);
        return await knex.select(
            'T.id',
            'T.title',
            'T.added_user_id',
            'T.is_closed',
            'T.updated',
            'O.vote_title_id',
            'O.option_number',
            'O.question')
            .from(`${table} as T`)
            .where({'T.id':id})
            .leftJoin('options as O', 'O.vote_title_id', 'T.id')
            .leftJoin(knex.select('vote_title_id','answer',knex.raw('COUNT(*) as count'))
                .from('user_title')
                .where({'vote_title_id': id})
                .groupBy('vote_title_id', 'answer')
                .as('U'), function() {
                this.on('U.vote_title_id', 'T.id')
                    .andOn('U.answer', 'O.option_number');




    }

//     return await knex.select(
//         'T.id',
//         'T.title',
//         'T.added_user_id',
//         'T.is_closed',
//         'T.updated',
//         'O.vote_title_id',
//         'O.option_number',
//         'O.question',
//         knex.raw('COUNT(*) as count'))
//         .from(`${table} as T`)
//         .where({'T.id':id})
//         .leftJoin('options as O', 'O.vote_title_id', 'T.id')
//         .leftJoin('user_title as U', function() {
//             this.on('U.vote_title_id', 'T.id')
//                 .andOn('U.answer', 'O.option_number');
//         })
//         .groupBy([
//             'T.id',
//             'T.title',
//             'T.added_user_id',
//             'T.is_closed',
//             'T.updated',
//             'O.vote_title_id',
//             'O.option_number',
//             'O.question',
//         ]);
//
//
// },

};
