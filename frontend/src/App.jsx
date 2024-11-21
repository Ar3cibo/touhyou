// 依存関係のインストール
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// コンポーネント
import VotesList from './components/VotesList.jsx';
import VotesDetail from './components/VotesDetail.jsx';

function App() {
    const votes_test = [
        {
            id: 1,
            vote_title: '何県に行きたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: '2024 - 11 - 20',
        },
        {
            id: 2,
            vote_title: 'どこの国に行きたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: '2024 - 11 - 20',
        },
        {
            id: 3,
            vote_title: 'ごはん食べたいですか',
            added_user_id: 1,
            is_Closed: false,
            updated: '2024 - 11 - 20',
        },
    ];

    const votes_detail_sample = [
        {
            id: 1,
            title: 'title1',
            added_user_id: 1,
            is_closed: true,
            updated: '2024-10-31T16:01:01.000Z',
            vote_title_id: 1,
            option_number: 1,
            question: 'question1-1',
            user_id: 1,
            count: '2',
        },
        {
            id: 1,
            title: 'title1',
            added_user_id: 1,
            is_closed: true,
            updated: '2024-11-01T17:02:02.000Z',
            vote_title_id: 1,
            option_number: 2,
            question: 'question1-2',
            user_id: 1,
            count: '1',
        },
        {
            id: 1,
            title: 'title1',
            added_user_id: 1,
            is_closed: true,
            updated: '2024-11-02T18:03:03.000Z',
            vote_title_id: 1,
            option_number: 3,
            question: 'question1-3',
            user_id: 2,
            count: '0',
        },
    ];
    // const [votes, setVotes] = useState([]);
    // const [votesDetail, setVotesDetail] = useState([]);
    // const [loading, setLoading] = useState(true);

    // function VotesDetailsWrapper() {
    //     const { id } = useParams();
    // }
    //
    // async function fetchVotesDetail() {
    //     const res = await axios.get('/api/votes:id');
    //     setVotesDetail(res.data);
    //     setLoading(false);
    // }
    //
    // async function fetchVotes() {
    //     const res = await axios.get('/api/votes');
    //     setVotes(res.data);
    //     setLoading(false);
    // }
    //
    // useEffect(() => {
    //     // fetchVotes();
    // }, []);f

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path={'/a'}
                        element={<VotesList votes={votes_test} />}
                    />
                    <Route
                        path={'/'}
                        element={<VotesDetail votes={votes_detail_sample} />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
