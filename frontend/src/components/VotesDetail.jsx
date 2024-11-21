import { useState } from 'react';

export default function VotesDetail({ votes }) {
    const [selectedChoice, setSelectedChoice] = useState('');

    function handleSubmit() {
        if (selectedChoice) {
            console.log('送信された選択:', selectedChoice);
        }
    }

    // 選択時の値を確認するためのハンドラー
    const handleChange = (e) => {
        console.log('選択された値:', e.target.value);
        console.log('選択された値の型:', typeof e.target.value);
        setSelectedChoice(e.target.value);
    };

    const list = votes.map((option) => {
        // optionのidの値を確認
        console.log('option.id:', option.id);
        console.log('option.idの型:', typeof option.id);
        const stringedId = String(option.id);

        return (
            <div key={stringedId}>
                <input
                    type="radio"
                    id={stringedId}
                    name="votes"
                    value={stringedId}
                    checked={selectedChoice === stringedId}
                    onChange={handleChange}
                />
                <label htmlFor={stringedId}>{option.question}</label>
            </div>
        );
    });

    return (
        <>
            <div>現在の選択: {selectedChoice}</div>
            {list}
            <button onClick={handleSubmit} disabled={!selectedChoice}>
                送信
            </button>
        </>
    );
}
