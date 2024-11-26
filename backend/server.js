const express = require("express");
const db = require("./knex");
const cors = require("cors");
const passportSetting = require("./passport")
const routers=require("./routers")



function setupServer() {
    const app = express();
    app.use(express.json());
    app.use(cors());
    // app.use(express.static(__dirname+`/public`));

    passportSetting.authentication(app)

    //エンドポイントの処理
    app.use("/",routers);


    return app;
}

module.exports = { setupServer };