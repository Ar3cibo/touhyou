import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [votes, setVotes] = useState([]);
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

    useEffect(() => {
        const fetchVotes = async () => {
            const res = await axios.get('http://localhost:8080/api/votes');
            setVotes(res.data);
            setLoading(false);
        };
    }, []);

    function optionList(votes) {
        return votes.map((vote) => {
            return <li>{vote.vote_title}</li>;
        });
    }
    const votesComponents = optionList(votes_test);
    const testList = <ol>{votesComponents}</ol>;

    return <>{testList}</>;
}

export default App;
