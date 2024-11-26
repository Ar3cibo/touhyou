require("dotenv").config ({path:"../../.env"})

const environment =process.env.NODE_ENV;
const config =require("../../knexfile")[environment]
const db=require("knex")(config)

//all
const QUESTION_TABLE ="vote_questions"
module.exports={
    QUESTION_TABLE,
    async all(limit){
        const data = await db(QUESTION_TABLE).limit(limit)
        console.log("data",data)
        return data
    },
//id 指定
    async find(id){
        const data = await db(QUESTION_TABLE).where({id})
        return data
    },

//save
    async save(data){
        await db.table(QUESTION_TABLE).insert(data);
        const response = await db(QUESTION_TABLE).orderBy("id", "desc").first();
        console.log("response",response)
        return {question_id: response.id}
    },


//delete
    async delete(data){
        await db.table(QUESTION_TABLE).where({id: data.question_id}).del()
        return data.question_id
    }
}
