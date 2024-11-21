import { Link } from 'react-router-dom';

export default function VotesList({ votes }) {
    const list = votes.map((vote) => {
        return (
            <li key={vote.id}>
                <Link to={`/vote/${vote.id}`}>{vote.vote_title}</Link>
            </li>
        );
    });

    return (
        <>
            <ol>{list}</ol>
        </>
    );
}
