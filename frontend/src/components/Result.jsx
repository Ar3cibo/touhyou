import {useEffect, useState} from "react";
import axios from "axios";

export default function Result() {
    const [optionList, setOptionList]= useState([])


    async function getResData(){
        const votesId=1//⭐️上階層のコンポーネントから受け取りたい
        const apiUrl = `/api/votes/${votesId}`
        const res = await axios.get(apiUrl);
        setOptionList(res.data)
        console.log(res.data)
    }

    useEffect(()=>{
        getResData()

    },[])

    const list = optionList.map((opt) => {
        return (
            <li key={opt.option_number
            }>

                <p>{opt.question}</p>
                <p>投票数：{opt.count}</p>
                <p style={{visibility:opt.adoptflg? 'visible' : 'hidden' }}>⭐️</p>
            </li>
        )
    });

    return <>
        {/*<button onClick={()=>{getResData()}}>実行テスト用</button>*/}
        <div>❓質問（上階層のコンポーネントから受け取りたい）</div>
    <ol>{list}</ol>
    </>

}