require("dotenv").config ({path:"../../.env"})

const environment =process.env.NODE_ENV;
const config =require("../../knexfile")[environment]
const db=require("knex")(config)
const USER_VOTING_TABLE = "user_voting"

module.exports = {
    USER_VOTING_TABLE,
//find
    async find(id){
        const data = await db(USER_VOTING_TABLE).where({question_id})
        return data
    },


//save
    async save(data){
        await db.table(USER_VOTING_TABLE).insert(data);
        const response = await db(USER_VOTING_TABLE).orderBy("question_id", "desc").first();
        return {question_id: response.question_id, option_id: response.option_id}
    },


//delete
    async deleteData(data){
        await db.table(USER_VOTING_TABLE).where({question_id: data.question_id}).del()
        return {question_id: data.question_id}
    }

}

