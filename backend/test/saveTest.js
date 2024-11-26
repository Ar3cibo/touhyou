require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
console.log(environment)
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../server.js");
const app =setupServer()
const questionsModel = require("../handlers/models/vote_questions_model")
const optionsModel = require("../handlers/models/vote_options_model")
const userVotingModel = require("../handlers/models/user_voting_model");
// const saveController=requre("../handlers/controller/saveController")
// const {expect} = require("chai");
const expect= chai.expect;
chai.use(chaiHttp);

describe ("POST", () => {
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

    it("POST  /api/saveNewQuestion", async () => {
        const data = {id: 6, question: '好きなテーマパークは？',user_id: 2,is_closed:false,updated:'2024-11-026 01:01:01'}
        const response = await questionsModel.save(data)
        console.log("🍌response",response)
        // expect(response).to.equal(JSON.stringify({ question_id: 6 }));
        expect(response).to.eql({ question_id: 6 });
    })

    it("POST  /api/saveNewOption", async () => {
        const data = {option_id : 1, question_id : 6, option : 'TEST', user_id : 2, updated : '2024-11-01 01:01:02'};

        const response = await optionsModel.save(data)
        console.log("🍌response",response)
        expect(response).to.eql({ question_id: 6 });
    })

    it("POST  /api/userVoting", async () => {
        const data = {user_id: 1, question_id: 6,option_id: 1}
        const response = await userVotingModel.save(data)
        console.log("🍌response",response)
        expect(response).to.eql({ question_id: 6, option_id: 1});
    })


})


