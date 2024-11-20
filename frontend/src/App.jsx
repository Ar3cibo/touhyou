import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [votes, setVotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVotes = async () => {
            const res = await axios.get('http://localhost:8080/api/movies');
            setVotes(res.data);
            setLoading(false);
        };
    }, []);

    return <></>;
}

export default App;
