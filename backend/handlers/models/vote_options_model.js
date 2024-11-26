const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config);
const OPTIONS_TABLE = "vote_options"
const USER_VOTING_TABLE = "user_voting"

module.exports = {
    OPTIONS_TABLE,
//all（allVoteCards）
    async all(limit){
        const data = await db(OPTIONS_TABLE).limit(limit)
        console.log("data",data)
        return data
    },

//id 指定（getVoteCard）
    async find(id){
        const data = await db(OPTIONS_TABLE).where({id})
        return data
    },

// voting集計値と合わせて取得  https://knexjs.org/guide/query-builder.html#leftjoin
    async allVoteCards(){
        const data = await db.from(OPTIONS_TABLE).leftJoin(USER_VOTING_TABLE,function(){
            // this.on(`${OPTIONS_TABLE}.question_id` ,'=', 'user_voting.question_id')
            this.on('vote_options.question_id' ,'=', 'user_voting.question_id')
                .andOn('vote_options.option_id', '=', 'user_voting.option_id')
        }).select('vote_options.*',db.raw('COUNT(user_voting.user_id) AS total_votes'))
            .groupBy('vote_options.question_id','vote_options.option_id','vote_options.option',' vote_options.user_id','vote_options.updated')
            .orderBy('vote_options.question_id','vote_options.option_id');
        return data
    },
    async findWithVoting(id){
        const data = await db.from(OPTIONS_TABLE).leftJoin(USER_VOTING_TABLE,function(){
            // this.on(`${OPTIONS_TABLE}.question_id` ,'=', 'user_voting.question_id')
            this.on('vote_options.question_id' ,'=', 'user_voting.question_id')
                .andOn('vote_options.option_id', '=', 'user_voting.option_id')
        }).select('vote_options.*',db.raw('COUNT(user_voting.user_id) AS total_votes'))
            .where({'vote_options.question_id':id})
            .groupBy('vote_options.question_id','vote_options.option_id','vote_options.option',' vote_options.user_id','vote_options.updated')
            .orderBy('vote_options.question_id','vote_options.option_id');
        return data
    },

//save
    async save(data){
        await db(OPTIONS_TABLE).insert(data);
        const response = await db(OPTIONS_TABLE).orderBy("question_id", "desc").first();
        return {question_id: response.question_id}
    },

//delete  questionに紐づくoptionを全て消す
    async delete(data){
        await db.table(OPTIONS_TABLE).where({id: data.question_id}).del()
        return {question_id : data.question_id}
    }
}
