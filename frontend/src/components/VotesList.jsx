import { Link } from 'react-router-dom';

export default function VotesList({ votes }) {
    const list = votes.map((vote) => {
        console.log(vote);
        return (
            <Link to={`/vote/${vote.id}`}>
                <li> {vote.vote_title}</li>;
            </Link>
        );
    });

    return (
        <>
            <ol>{list}</ol>
        </>
    );
}
