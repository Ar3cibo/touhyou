import{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginView() {
    const [username ,setUsername]=useState('')
    const [password ,setPassword]=useState('')
    const [errorMessage ,setErrorMessage]=useState('')
    const navigate = useNavigate();

    const server_url ="http://localhost:8080"
    const submit =async(event: { preventDefault: () => void })=>{
        try{
            setErrorMessage('')
            event.preventDefault()
            const response = await fetch(`${server_url}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                navigate('/');
            } else{
                const errorData = await response.json();
                throw new Error(errorData.message || 'エラーが発生しました');
            }
            const data = await response.json();
            console.log(data)
            //https://qiita.com/frozenbonito/items/e708dfb3ab7c1fd3824d
        }catch(error:unknown){
            if(error instanceof Error){
                setErrorMessage(error.message);
                console.error('エラー:', error.message);
            }
        }
    }

    return (
        <div>
            <h1>Login View</h1>
            <form action="/login" method="post">
                <div>
                    <label>ユーザーID：</label>
                    <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>
                <div>
                    <label>パスワード：</label>
                    <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <input type="submit" value="ログイン" onClick={submit}/>
                </div>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )}