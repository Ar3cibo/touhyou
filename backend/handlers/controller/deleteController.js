require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)
const userVotingModel = require("../models/user_voting_model")
const optionsModel = require("../models/vote_options_model")
const questionsModel = require("../models/vote_questions_model")

module.exports = {
// /api/voteCard/:id
    //データがリレーションされたテーブルの一部のみで削除されないように
    // 一連の削除をトランザクションとして扱い、エラー時はロールバックする
    async deleteVoteCard(req, res) {
        await db.transaction(async function (trx){
            const deleteId = req.params.id
            console.log("params-----", req.params)
            console.log("deleteId-----", deleteId)
            try {
                //.transacting(trx)があると一つ目のテーブルまでしか削除できない
                // await userVotingModel.delete(deleteId).transacting(trx)
                // await userVotingModel.delete(deleteId)
                // const deletedUserVoting = await userVotingModel.find(deleteId).transacting(trx)
                // console.log("消えたはずのuserVotingのデータ：", deletedUserVoting)
                // await optionsModel.delete(deleteId).transacting(trx)
                // const deletedOptions = await optionsModel.find(deleteId).transacting(trx)
                // console.log("消えたはずのvote_optionsのデータ：", deletedOptions)
                // await questionsModel.delete((deleteId)).transacting(trx)
                // const deletedQuestions = await questionsModel.find(deleteId).transacting(trx)
                // console.log("消えたはずのvote_questionsのデータ：", deletedQuestions)

                await db.table("user_voting").where({question_id: deleteId}).del().transacting(trx)
                await db.table("vote_options").where({question_id: deleteId}).del().transacting(trx)
                await db.table("vote_questions").where({id: deleteId}).del().transacting(trx)

                await trx.commit();
                res.status(200).json({question_id: deleteId})
            }
            catch (error) {
                console.log("Is completed transaction...before:", trx.isCompleted())
                await trx.rollback()
                console.log("Is completed transaction...after:", trx.isCompleted())
                res.status(500).json({error: "Could not delete data."});
            }
        })
    }
}

