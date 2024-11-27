const questionsModel = require("../models/vote_questions_model")
const optionsModel = require("../models/vote_options_model")
const userVotingModel = require("../models/user_voting_model")

module.exports = {

    // /api/saveNewQuestion
    async saveNewQuestion(req, res) {
        const reqData = req.body
        const maxQuestionId = await questionsModel.findMaxQuestionId()
        const saveData = {
            id: maxQuestionId + 1,
            question: reqData.question,
            user_id: reqData.user_id,
            is_closed: false,
            updated: new Date()
        }

        try {
            const resData = await questionsModel.save(saveData)
            res.status(200).json(resData)
        } catch (error) {
            console.log("Internal Server Error(saveNewQuestions)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    // /api/saveNewOption
    async saveNewOption(req, res) {
        const reqData = req.body;
        console.log("req.body-----", reqData)//正常に取れている
        const maxOptionId = await optionsModel.findMaxOptionId(reqData.question_id)
        console.log("maxOptionId-----", maxOptionId)
        const saveData = {
            option_id: maxOptionId + 1,
            question_id: reqData.question_id,
            option: reqData.option,
            user_id: reqData.user_id,//！！あとで変更する
            updated: new Date()
        };
        try {
            await optionsModel.save(saveData)
            res.status(200).json({question_id: reqData.question_id})
        } catch (error) {
            console.log("Internal Server Error(saveNewOptions)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },

    async userVoting(req, res){
        const saveData = req.body;
        console.log("userVoting_saveData---", saveData)
        try{
            await userVotingModel.save(saveData)
            res.status(200).json({question_id: saveData.question_id, option_id: saveData.option_id})
        }catch(error){
            console.log("Internal Server Error(saveNewOptions)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }

};





