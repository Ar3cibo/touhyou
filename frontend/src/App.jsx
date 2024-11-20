// 依存関係のインストール
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// コンポーネント
import VotesList from './components/VotesList.jsx';

function App() {
    const [votes, setVotes] = useState([]);
    const [votesDetail, setVotesDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const votes_test = [
        {
            id: 1,
            vote_title: '何県に行きたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: 2024 - 11 - 20,
        },
        {
            id: 2,
            vote_title: 'どこの国に行きたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: 2024 - 11 - 20,
        },
        {
            id: 3,
            vote_title: 'ごはん食べたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: 2024 - 11 - 20,
        },
    ];

    function VotesDetailsWrapper() {
        const { id } = useParams();
    }

    async function fetchVotesDetail() {
        const res = await axios.get('/api/votes:id');
        setVotesDetail(res.data);
        setLoading(false);
    }

    async function fetchVotes() {
        const res = await axios.get('/api/votes');
        setVotes(res.data);
        setLoading(false);
    }

    function optionList() {}

    useEffect(() => {
        // fetchVotes();
    }, []);

    return (
        <>
            <VotesList votes={votes_test} />
        </>
    );
}

export default App;
