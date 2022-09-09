import { useState } from "react";
import axios from "axios";

export const TestAapi = () => {

    const [user, setUser] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useState(document.cookie)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const instance = axios.create({
        withCredentials : true
    })

    const doLogin = () => {
<<<<<<< HEAD:frontend/src/pages/TestApi.jsx
         instance
             .get('http://localhost:8080/sanctum/csrf-cookie/')
             .then(() => {
=======
        instance
            .get('http://localhost:8080/sanctum/csrf-cookie/')
            .then((response) => {
                console.log(response)
                setCookie(document.cookie)

>>>>>>> 63422600548b316a08ae640589b825f5f5439d5c:frontend/src/pages/TestApi.js
                instance
                    .post('http://localhost:8080/api-login',{
                        email : email,
                        password : password
                        }
                    )
                    .then((response) => {
                        console.log("api login result")
                        console.log(response)
                        setCookie(document.cookie)
                        getUser()
                    })
                    .catch((error) => {
                        console.log("api login error")
                        console.log(error)
                    });
            })
        
        
    }

    const getUser = () => {
        setStatus('問い合わせ中 ...............');

        setTimeout(() => {
            instance.get('http://localhost:8080/api/user/')
                .then((response) => {
                    console.log('● ログイン中のユーザー情報');
                    console.log(response.data);
                    setUser(response.data.name);
                    setStatus('ログイン中 ( name : ' + response.data.name + ' / email : ' + response.data.email + ' )' );
                    setCookie(document.cookie)
                })
                .catch((error) => {
                    setStatus('未ログイン');
                    setUser("");
                    console.log(error)
                });
        }, 500);
    }

    const doLogout = () => {
<<<<<<< HEAD:frontend/src/pages/TestApi.jsx
        
=======

>>>>>>> 63422600548b316a08ae640589b825f5f5439d5c:frontend/src/pages/TestApi.js
        instance
            .post("http://localhost:8080/api-logout/", {
                name: name,
                email: email,
                password: password
            })
            .then((response) => {
                console.log("api logout result");
                console.log(response)
                getUser()
            })
            .catch((error) => {
                console.log("api logout error")
                console.log(error)
            });
    }

    return (
        <div>
            <h5>ログイン</h5>
            {/* <p>{cookie}</p> */}
            <p>name</p>
            <input type="text" value={name} onChange={onChangeName}></input>
            <p>email</p>
            <input type="text" value={email} onChange={onChangeEmail}></input>
            <p>password</p>
            <input type="text" value={password} onChange={onChangePassword}></input>
            <p></p>
            <button type="submit" onClick={doLogin}>Vue.jsによるログイン実行</button>

            <hr />

            <h5>ログインユーザー</h5>
            <p>{status}</p>
            <button type="button" onClick={getUser}>ユーザー情報取得</button>
            <div>
                <h5>ログインユーザーのログアウト</h5>
                <button type="button" onClick={doLogout}>ログアウト</button>
            </div>
        </div>
    )

}