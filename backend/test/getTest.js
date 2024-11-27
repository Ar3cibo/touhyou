require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../server.js");
const app =setupServer()
const questionsModel = require("../handlers/models/vote_questions_model")
const optionsModel = require("../handlers/models/vote_options_model")

const expect= chai.expect;
chai.use(chaiHttp);

describe ("GET", () => {
    let request;

    before(async () => {
        await db.migrate
            .forceFreeMigrationsLock()
            .then(() => db.migrate.rollback({ all: true }))
            .then(() => db.migrate.latest())
            .then(() => db.seed.run())
            .catch(console.error);
        request = chai.request(app).keepOpen();
    });
    after(() => {
        request.close();
    });

    it("GET  questions all", async () => {
        const response = await questionsModel.all(100)
        console.log("🍌questions all",response)
        // expect(response).to.equal(JSON.stringify({ question_id: 6 }));
        expect(response).to.be.an.instanceof(Array);
    })

    it("GET  questions find", async () => {
        const response = await questionsModel.find(1)
        console.log("🍌questions find",response)
        // expect(response).to.equal(JSON.stringify({ question_id: 6 }));
        expect(response).to.be.an.instanceof(Array);
    })


    it("GET  options allVoteCards", async () => {
        const response = await optionsModel.allVoteCards()
        console.log("🍌options allVoteCards",response)
        // expect(response).to.equal(JSON.stringify({ question_id: 6 }));
        expect(response).to.be.an.instanceof(Array);
    })

    it("GET  options findWithVoting", async () => {
        const response = await optionsModel.findWithVoting(1)
        console.log("🍌options findWithVoting",response)
        // expect(response).to.equal(JSON.stringify({ question_id: 6 }));
        expect(response).to.be.an.instanceof(Array);
    })
})


