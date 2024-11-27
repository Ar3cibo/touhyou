require("dotenv").config({ path: "./.env" });
const environment = process.env.NODE_ENV;
const config = require("../knexfile")[environment];
const db = require("knex")(config)

const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupServer } = require("../server.js");
const app =setupServer()
const deleteController = require("../handlers/controller/deleteController")
const userVotingModel = require("../handlers/models/user_voting_model")
const optionsModel = require("../handlers/models/vote_options_model")
const questionsModel = require("../handlers/models/vote_questions_model")

const expect= chai.expect;
chai.use(chaiHttp);

describe ("DELETE", () => {
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

    it("DELETE : Should delete ordered userVoting data.", async () => {
        await fetch("http://localhost:8080/api/voteCards/1",{
            method: "DELETE"
        })
        const deletedUserVoting = await userVotingModel.find(1)
        console.log("deletedUserVoting-----", deletedUserVoting)
        expect(deletedUserVoting.length).to.equal(0)
    })
    it("DELETE : Should delete ordered options data.", async () => {
        // await fetch("http://localhost:8080/api/voteCards/1",{
        //     method: "DELETE"
        // })
        const deletedOptions = await optionsModel.find(1)
        console.log("deletedOptions-----", deletedOptions)
        expect(deletedOptions.length).to.equal(0)
    })
    it("DELETE : Should delete ordered question data.", async () => {
        // await fetch("http://localhost:8080/api/voteCards/1",{
        //     method: "DELETE"
        // })
        const deletedQuestion = await questionsModel.find(1)
        console.log("deleteQuestion-----", deletedQuestion)
        expect(deletedQuestion.length).to.equal(0)
    })

})


