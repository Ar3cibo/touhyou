const questionsModel = require("../models/vote_questions_model")
const optionsModel = require("../models/vote_options_model")

module.exports = {
    async allVoteCards(req, res) {
        try {
            const questionData = await questionsModel.all()
            const optionData = await optionsModel.allVoteCards()
            const result =questionData.map(el=>{
                return{question_id:el.id,question:el.question,user_id:el.user_id,is_closed:el.is_closed,updated:el.updated,options:
                        optionData.filter(op=>op.question_id ===el.id).map(op=>{
                            return{option_id:op.option_id,
                                question_id: op.question_id,
                                option: op.option,
                                count: op.total_votes
                            }})}
            })
            console.log("questionData",questionData)
            console.log("optionData",optionData)
            console.log("result",result)
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(400).json("Could not get vote's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(vote data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    },
    async findWithVoting(req, res) {
        try {
            const id = req.params.id
            console.log("id:",id)
            const questionData = await questionsModel.find(id)
            const optionData = await optionsModel.findWithVoting(id)
            const result =questionData.map(el=>{
                return{question_id:el.id,question:el.question,user_id:el.user_id,is_closed:el.is_closed,updated:el.updated,options:
                        optionData.filter(op=>op.question_id ===el.id).map(op=>{
                            return{option_id:op.option_id,
                                question_id: op.question_id,
                                option: op.option,
                                count: op.total_votes
                            }})}
            })
            // console.log("questionData",questionData)
            // console.log("optionData",optionData)
            // console.log("result",result)
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(400).json("Could not get vote's data.")
            }
        } catch (error) {
            console.log("Internal Server Error(vote data)", error)
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}