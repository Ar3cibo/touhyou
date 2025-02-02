require("dotenv").config ({path:"../../.env"})

const environment =process.env.NODE_ENV;
const config =require("../../knexfile")[environment]
const db=require("knex")(config)

//all
const QUESTION_TABLE ="vote_questions"
module.exports={
    QUESTION_TABLE,
    async all(limit=100){
        const data = await db(QUESTION_TABLE).limit(limit)
        // console.log("data",data)
        return data
    },
//id 指定
    async find(id){
        const data = await db(QUESTION_TABLE).where({id})
        return data
    },
    
//question_idの最大値を取得
//id列の自動インクリメント挿入機能がなぜか効かないため
async findMaxQuestionId(){
    const maxId = await db(QUESTION_TABLE).max("id")
    return maxId[0].max;
},


//save
    async save(data){
        await db.table(QUESTION_TABLE).insert(data);
        const response = await db(QUESTION_TABLE).orderBy("id", "desc").first();
        return {question_id: response.id}
    },

}
