const questionsModel = require("../models/vote_questions_model")
const optionsModel = require("../models/vote_options_model")
const userVotingModel = require("../models/user_voting_model")

module.exports = {
    // // /api/saveNewQuestion
    // async saveNewQuestion(req, res) {
    //     const saveData = req.body
    //     console.log("🍏🍏🍏🍏" ,req  )
    //     try {
    //        const resData = await questionsModel.save(saveData)
    //         res.status(200).json(resData)
    //     } catch (error) {
    //         console.log("Internal Server Error(saveNewQuestions)", error)
    //         res.status(500).json({error: "Internal Server Error"});
    //     }
    // },
    // // /api/saveNewOption
    // async saveNewOption(req, res) {
    //     const saveData = req.body;
    //     try {
    //         return await optionsModel.save(saveData)
    //     } catch (error) {
    //         console.log("Internal Server Error(saveNewOptions)", error)
    //         res.status(500).json({error: "Internal Server Error"});
    //     }
    // },
    //
    // async userVoting(req, res){
    //     const saveData = req.body;
    //     console.log("userVoting_saveData---", saveData)
    //     try{
    //         return await userVotingModel.save(saveData)
    //     }catch(error){
    //         console.log("Internal Server Error(saveNewOptions)", error)
    //         res.status(500).json({error: "Internal Server Error"});
    //     }
    // }

    // /api/saveNewQuestion
    async saveNewQuestion(req, res) {
        const saveData = req.body
        console.log("🍏🍏🍏🍏" ,req  )
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
        const saveData = req.body;
        try {
            return await optionsModel.save(saveData)
        } catch (error) {
            console.log("Internal Server Error(saveNewOptions)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },

    async userVoting(req, res){
        const saveData = req.body;
        console.log("userVoting_saveData---", saveData)
        try{
            return await userVotingModel.save(saveData)
        }catch(error){
            console.log("Internal Server Error(saveNewOptions)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }

};





