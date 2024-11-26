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
                await userVotingModel.delete(deleteId)
                const deletedUserVoting = await userVotingModel.find(deleteId)
                console.log("消えたはずのuserVotingのデータ：", deletedUserVoting)
                await optionsModel.delete(deleteId)
                const deletedOptions = await optionsModel.find(deleteId)
                console.log("消えたはずのvote_optionsのデータ：", deletedOptions)
                await questionsModel.delete((deleteId))
                const deletedQuestions = await questionsModel.find(deleteId)
                console.log("消えたはずのvote_questionsのデータ：", deletedQuestions)
                await trx.commit();
                res.status(200).json({completed: "Deleted all ordered data."})
            }
            catch (error) {
                await trx.rollback()
                console.log("Is completed transaction...", trx.isCompleted)
                res.status(500).json({error: "Could not delete data."});
            }
        })
    }
}
