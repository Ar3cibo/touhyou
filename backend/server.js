const express = require("express");
const db = require("./knex");
const cors = require("cors");
const axios = require("axios");
const handlerVoteTitle = require("./handlers/vote_title");

function setupServer() {
    const app = express();
    app.use(express.json());
    // app.use("/", express.static("./public"));

    app.get('/touhyou/votes/:added_user_id', async(req,res)=>{
        console.log("--get-votes--")
        try {
            const id = req.params.added_user_id
            const resData = await handlerVoteTitle.find(db, id)
            res.status(200).json(resData)
        }catch(e){
            console.log(e)
        res.status(404).json(e)}

    })

    app.get('/touhyou/votes/', async(req,res)=>{
        console.log("--get-votes--")
        try {
            const resData = await handlerVoteTitle.all(db)
            res.status(200).json(resData)
        }catch(e){
            console.log(e)
            res.status(404).json(e)}

    })

    return app;
}

module.exports = { setupServer };