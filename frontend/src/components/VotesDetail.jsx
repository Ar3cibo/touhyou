import { useState } from "react";
import axios from "axios";

export default function VotesDetail({ votes }) {
    const [selectedChoice, setSelectedChoice] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // 送信中の状態管理を追加
    const [error, setError] = useState(null); // エラー状態の管理を追加

    // 投票を送る
    async function postVotes() {
        try {
            const addData = { user_id: 3, vote_title_id: 2, answer: selectedChoice };
            const apiUrl = "/api/answer";
            const res = await axios.post(apiUrl, addData);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.error("Error posting votes:", error);
            throw error; // エラーを上位に伝播
        }
    }

    // handleSubmitを非同期関数に変更
    async function handleSubmit() {
        if (!selectedChoice) return;

        setIsSubmitting(true);
        setError(null);

        try {
            await postVotes();
            // 成功時の処理（例：メッセージ表示やリダイレクトなど）
            setSelectedChoice(""); // フォームをリセット
        } catch (error) {
            setError("投票の送信に失敗しました。もう一度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    }

    // 選択時の値を確認するためのハンドラー
    const handleChange = (e) => {
        setSelectedChoice(e.target.value);
    };

    const list = votes.map((option) => {
        // optionのidの値を確認
        console.log("option.id:", option.id);
        console.log("option.idの型:", typeof option.id);
        const stringedId = String(option.option_number);

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
