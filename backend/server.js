const express = require("express");
const db = require("./knex");
const cors = require("cors");
const handlerVoteTitle = require("./old_handlers/vote_title");
const handlerUserTitle = require("./old_handlers/user_title");
const handlerOptions = require("./old_handlers/options");

const getController=require("./handlers/controller/getController")
const saveController=require("./handlers/controller/saveController")
const deleteController=require("./handlers/controller/deleteController")

function setupServer() {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname+`/public`));

    app.get("/api/allVoteCards",getController.allVoteCards)
    app.get("/api/voteCards/:id",getController.findWithVoting)
    // app.get("/api/voteCard/:id",getController.getVoteCard)
    app.post("/api/saveNewQuestion",saveController.saveNewQuestion)
    app.post("/api/saveNewOption",saveController.saveNewOption)
    app.delete("/api/voteCards/:id",deleteController.deleteVoteCard)
    app.post("/api/userVoting",saveController.userVoting)



    //vote_title///////////////////////////////////////
    app.get('/api/votes/:id', async(req,res)=>{
        console.log("--get-votes--")
        try {
            const id = Number(req.params.id)
            const resData = await handlerVoteTitle.find(db, id)
            res.status(200).json(resData)
        }catch(e){
            console.log(e)
        res.status(404).json(e)}
    })

    app.get('/api/votes', async(req,res)=>{
        console.log("--get-votes--")
        try {
            const resData = await handlerVoteTitle.all(db)
            console.log("--get-votes--",resData)
            res.status(200).json(resData)
        }catch(e){
            console.log(e)
            res.status(404).json(e)}
    })

    app.post('/api/votes', async(req,res)=>{
        console.log("--post-votes--")

        try {
            const params = req.body
            const [resData] = await handlerVoteTitle.new(db,params)
            res.status(201).json(resData)
        }catch(e){
            console.log(e)
            res.status(404).json(e)}
    })

    //options///////////////////////////////////////
    app.post('/api/options', async(req,res)=>{
        console.log("--post-options--")
        const params = req.body
        try {
            const [resData] = await handlerOptions.new(db,params)
            res.status(201).json(resData)
        }catch(e){
            console.log(e)
            res.status(404).json(e)}
    })

    //user_title///////////////////////////////////////
    app.post('/api/answer', async(req,res)=>{
        console.log("--post-answer--")
        const params = req.body
        try {
            const [resData] = await handlerUserTitle.new(db,params)
            res.status(201).json(resData)
        }catch(e){
            console.log(e)
            res.status(404).json(e)}
    })

    return app;
}

module.exports = { setupServer };