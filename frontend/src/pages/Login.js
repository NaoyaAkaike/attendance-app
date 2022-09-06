import axios from "axios";
import { useState } from "react";
import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const doLogin = () => {
        const instance = axios.create({
            withCredentials : true
        })
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
                        //getUser()
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
                <main class="py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">Login</div>

                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <label htmlFor="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                            <div class="col-md-6">
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value={email} onChange={onChangeEmail} required autoComplete="email" autoFocus></input>

                                                <span class="invalid-feedback" role="alert">
                                                    <strong> $message </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label htmlFor="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                            <div class="col-md-6">
                                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" value={password} onChange={onChangePassword} required autoComplete="current-password"></input>

                                                <span class="invalid-feedback" role="alert">
                                                    <strong> $message </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <div class="col-md-6 offset-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" checked></input>

                                                    <label class="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-0">
                                            <div class="col-md-8 offset-md-4">
                                                <button type="submit" class="btn btn-primary" onClick={doLogin}>
                                                    Login
                                                </button>

                                                <a class="btn btn-link" href="{{ route('password.request') }}">
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

