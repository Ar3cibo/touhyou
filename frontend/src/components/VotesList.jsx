import { Link } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";

export default function VotesList({ votes }) {
    const [inputVote,setInputVote]=useState("")

    async function addVotes() {
        const addData ={title:inputVote,added_user_id:1}
        const apiUrl = '/api/votes'
        const res = await axios.post(apiUrl,addData);
        console.log(res.data)
    }

    const list = votes.map((vote) => {
        return (
            <li key={vote.id}>
                <Link to={`/vote/${vote.id}`}>{vote.vote_title}</Link>
            </li>
        )
    });

    return (
        <>
            <ol>{list}</ol>
            <section id="add_vote_area">
            <input type="text" onChange={(e)=>{setInputVote(e.target.value)}}/>
                <button onClick={()=>{addVotes()}}>質問を追加する</button>
            </section>
        </>
    );
}
