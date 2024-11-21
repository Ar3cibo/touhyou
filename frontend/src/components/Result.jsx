import { useEffect, useState } from "react";
import axios from "axios";

export default function Result() {
  const [optionList, setOptionList] = useState([]);

  async function getResData() {
    const votesId = 1; //⭐️上階層のコンポーネントから受け取りたい
    const apiUrl = `/api/votes/${votesId}`;
    const res = await axios.get(apiUrl);
    setOptionList(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getResData();
  }, []);

  const list = optionList.map((opt, index) => {
    if (index === 0) {
      return (
        <tr key={opt.option_number}>
          <td className="px-4 py-3 text-center">{opt.option_number}</td>
          <td className="px-4 py-3">{opt.question}</td>
          <td className="px-4 py-3 text-center">{opt.count}</td>
          <td
            className="px-4 py-3 text-lg text-gray-900 text-center"
            style={{ visibility: opt.adoptflg ? "visible" : "hidden" }}
          >
            ⭐️
          </td>
          <td className="w-10 text-center"></td>
        </tr>
      );
    } else {
      return (
        <tr key={opt.option_number}>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-center ">
            {opt.option_number}
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3">
            {opt.question}
          </td>
          <td className="border-t-2 border-gray-200 px-4 py-3 text-center">
            {opt.count}
          </td>
          <td
            className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-center"
            style={{ visibility: opt.adoptflg ? "visible" : "hidden" }}
          >
            ⭐️
          </td>
        </tr>
      );
    }
  });

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
              投票結果
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              ここに質問文入れる？
            </p>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl text-center">
                    no
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">
                    question
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">
                    count
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">
                    most
                  </th>
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </table>
          </div>

          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
