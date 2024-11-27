import{useState} from 'react'
import {useNavigate} from "react-router-dom";
export default function SignUpView() {
    const [username ,setUsername]=useState('')
    const [loginname ,setLoginname]=useState('')
    const [password ,setPassword]=useState('')
    const [errorMessage ,setErrorMessage]=useState('')
    const navigate = useNavigate(); // リダイレクト用のフック

    const URL = process.env.VITE_URL;

    const server_url = URL
    const signUp =async(event: { preventDefault: () => void })=>{
        try{
            setErrorMessage('')
            event.preventDefault()
            const response = await fetch(`${server_url}/sign-up`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, loginname, password }),
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
              <h1>Sign Up View</h1>
              <form action="/login" method="post">
                  <div>
                      <label>ユーザー名：</label>
                      <input type="text" name="username" value={username} onChange={(e) => {
                          setUsername(e.target.value)
                      }}/>
                  </div>
                  <div>
                      <label>ログイン名：</label>
                      <input type="text" name="loginname" value={loginname} onChange={(e) => {
                          setLoginname(e.target.value)
                      }}/>
                  </div>
                  <div>
                      <label>パスワード：</label>
                      <input type="password" name="password" value={password} onChange={(e) => {
                          setPassword(e.target.value)
                      }}/>
                  </div>
                  <div>
                      <input type="submit" value="ユーザ登録" onClick={signUp}/>
                  </div>
              </form>
              {errorMessage && <div>{errorMessage}</div>}
          </div>
  );
}