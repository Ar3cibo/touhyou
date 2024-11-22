import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./VotesList.css";
import Result from "./Result.jsx"; //テスト用。あとで消す

export default function VotesList({ votes }) {
  const [inputVote, setInputVote] = useState("");
  const [res, setRes] = useState({ id: "", title: "", added_user_id: "" }); //⭐️テスト用。後で削除
  const [all, setAll] = useState([]); //⭐️テスト用。後で削除

  async function test() {
    //⭐️テスト用。関数ごと後で削除
    const apiUrl = "/api/votes";
    const res = await axios.get(apiUrl);
    setAll(res.data);
    console.log(res.data);
  }

  async function addVotes() {
    const addData = { title: inputVote, added_user_id: 1 };
    const apiUrl = "/api/votes";
    const res = await axios.post(apiUrl, addData);
    setRes(res.data); //⭐️テスト用。後で削除
    await test(); //⭐️テスト用。後で削除
    console.log(res.data);
  }

  const list = votes.map((vote) => {
    return (
      <div
        key={vote.id}
        className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
      >
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
          {vote.id}. {vote.vote_title}
        </h2>
        <p className="leading-relaxed text-base mb-4">この部分いらない？</p>
        <a
          className="text-indigo-500 inline-flex items-center"
          href={`/vote/${vote.id}`}
        >
          回答する
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    );
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-1xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              KATANA
            </h2>
            <h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-gray-900">
              TOHYO
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              投票アプリだよ
            </p>
          </div>
          {/*動作確認用セクション。後で削除⭐️*/}
          <section id="kakunin">
            <div>動作確認用</div>
            <div>
              id:{res.id}, userid:{res.added_user_id}, title:{res.title}
            </div>
            <div>質問件数：{all.length}</div>
          </section>
          <section id="vote_input_area">
            <h2 className="text-lg sm:text-2xl text-gray-900 font-medium title-font mb-3 ">
              💫 新しい質問をつくる
            </h2>
            <div
              className="flex w-full justify-center items-end"
              id="vote_input_area_in"
            >
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  質問文を入力してね
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    setInputVote(e.target.value);
                  }}
                />
              </div>
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => {
                  addVotes();
                }}
              >
                Button
              </button>
            </div>
          </section>
          <section>
            <h2 className="ttext-lg sm:text-2xl text-gray-900 font-medium title-font mb-3 ">
              💫 回答する質問をえらぶ
            </h2>
            <div className="flex flex-wrap" id="select_vote_area_in">
              {list}
            </div>
          </section>

          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>

      <div>----------------------------------------</div>
      <Result />
    </>
  );
}
