import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [votes, setVotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVotes = async () => {
            const res = await axios.get('http://localhost:8080/api/votes');
            setVotes(res.data);
            setLoading(false);
        };
    }, []);

    function optionList(votes) {
        const votesComponents = votes.map((vote) => {
            return <p>vote</p>;
        });
    }

    return <></>;
}

export default App;
