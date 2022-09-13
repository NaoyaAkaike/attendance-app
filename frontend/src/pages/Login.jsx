import { useCallback, useState } from "react";
import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"
import { userState } from "../components/Recoil";
import { useAxios } from "../components/useAxios";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } =useAxios();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
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

                                    <div className="card-body was-validated" noValidate>
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
                                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" defaultChecked></input>

                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary" onClick={useCallback(() => handleLogin(email, password))}>
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

