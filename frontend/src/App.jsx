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
    // }, []);

    return (
        <><h1 className="text-7xl font-bold underline">
            Hello world!
        </h1>
            <Router>
                <Routes>
                    <Route
                        path={'/'}
                        element={<VotesList votes={votes_test}/>}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
