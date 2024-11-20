console.log("==test=====start=");
const axios = require("axios");
const { expect } = require('chai');
const apiURL='http://localhost:7000'

describe("起動確認__test.js", () => {
    it("起動OK", async () => {
        expect(11).to.equal(11);
    });

    describe("all", () => {
        it("should return 1st data id", async () => {
            const url=apiURL+"/api/votes";
            const resData = await axios.get(url)
            const res =resData.data
            expect(res[0].id).to.equal(2);
        });
    });

    describe("find", () => {
        it("should return 1st data id, option_number, count", async () => {
            const url=apiURL+"/api/votes/1";
            const resData = await axios.get(url)
            const res =resData.data
            const correct= {
                    id: 1,
                    title: 'title1',
                    added_user_id: 1,
                    is_closed: true,
                    updated: '2024-10-31T16:01:01.000Z',
                    vote_title_id: 1,
                    option_number: 1,
                    question: 'question1-1',
                    count: '2'
                }
            expect(res[0].id).to.equal(correct.id);
            expect(res[0].option_number).to.equal(correct.option_number);
            expect(res[0].count).to.equal(correct.count);
        });
    });


        describe("new", () => {
            it("should return 1st data id, option_number, count", async () => {

                const url = apiURL + "/api/votes/";
                const addData = {title: 'ラーメンは好き？', added_user_id: 2}
                const resData = await axios.post(url, addData)
                const res = resData.data
                expect(res.title).to.equal(addData.title);
                expect(res.added_user_id).to.equal(addData.added_user_id);
            });
        });
});

