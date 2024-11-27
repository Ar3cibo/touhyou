const express = require("express");
const db = require("./knex");
const cors = require("cors");
const passportSetting = require("./passport")
const routers=require("./routers")



const app = express();
function setupServer() {
    app.use(express.json());
    app.use(cors());
    app.use("/", express.static(__dirname + "/dist"))

    passportSetting.authentication(app)

    //エンドポイントの処理
    app.use("/",routers);


    return app;
}

module.exports = { setupServer };



require("dotenv").config();
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