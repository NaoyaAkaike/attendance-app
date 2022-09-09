import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../components/Auth";
import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wasValidated, setWasValidated] = useState("was-validated");
    const { setAuth } = useContext(AuthContext);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate();
    

    const handleLogin = () => {

        //loginボタンおしたらバリデーションの場合
        //setWasValidated("was-validated");
        //validationエラー有無の分岐
        //こんなやつ⇒if console.log(event.target.checkValidity())

        const instance = axios.create({
            withCredentials : true
        })

        const getUser = () => {
            instance.get('http://localhost:8080/api/user/')
                .then((response) => {
                    console.log('● ログイン中のユーザー情報');
                    console.log(response.data);
                    setAuth(response.data.name);
                    navigate("/home")
                })
                .catch((error) => {
                    console.log('未ログイン');
                    console.log(error)
                });
        }

        instance
            .get('http://localhost:8080/sanctum/csrf-cookie/')
            .then(() => {
                instance
                    .post("http://localhost:8080/api-login/", {
                        //name: name,
                        email: email,
                        password: password
                    })
                    .then((response) => {
                        console.log("api login result");
                        console.log(response)
                        getUser()
                    })
                    .catch((error) => {
                        console.log("api login error")
                        console.log(error)
                    });
            })
    }

    return (
        <>
            <HeadTtag></HeadTtag>
            <Header></Header>
            <div id="app">
                <main className="py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Login</div>

                                    <div className={"card-body " + wasValidated} noValidate>
                                        <div className="row mb-3">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                            <div className="col-md-6">
                                                {/* <input id="email" type="email" className="form-control @error('email') is-invalid @enderror" name="email" value={email} onChange={onChangeEmail} required autoComplete="email" autoFocus></input> */}
                                            <input id="email" type="email" className="form-control" name="email" value={email} onChange={onChangeEmail} required autoComplete="email" autoFocus></input>

                                                <span className="invalid-feedback" role="alert">
                                                    <strong> invalid mail address </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control" name="password" value={password} onChange={onChangePassword} required autoComplete="current-password"></input>

                                                <span className="invalid-feedback" role="alert">
                                                    <strong> invalid password </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" checked></input>

                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                                                    Login
                                                </button>

                                                <a className="btn btn-link" href="{{ route('password.request') }}">
                                                    Forgot Your Password?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
} 

