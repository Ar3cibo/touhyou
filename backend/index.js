require("dotenv").config();
const { setupServer } = require("./server");
const express = require("express");
const app = setupServer();
app.use("/", express.static(__dirname + "/dist"))

const environment = process.env.NODE_ENV
const PORT = process.env.PORT;
const VITE_URL = process.env.VITE_URL
console.log("PORT :",PORT);
app.listen(PORT, () => {
    if(environment === "development"){
        console.log("environment :", environment)
        console.log(`Expressサーバー起動中：http://localhost:${PORT}`);
    }else{
        console.log("environment :", environment)
        console.log(`Webサーバー起動中：${VITE_URL}:${PORT}`)
    }
});