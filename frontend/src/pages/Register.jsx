import { useCallback, useState } from "react";
import { Header } from "../components/Header"
import { useAxios } from "../components/useAxios";

export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { handleRegister } = useAxios();

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangePassword2 = (e) => {
        setPassword2(e.target.value)
    }

    return (
        <>
            <Header/>
            <div className="app">
                <main className="py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Register</div>

                                    <div className="card-body was-validated" noValidate>

                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Name</label>

                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control" name="name" value={name} onChange={onChangeName} required autoComplete="name" autoFocus></input>

                                                    <span className="invalid-feedback" role="alert">
                                                        <strong>invalid name</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control" name="email" value={email} onChange={onChangeEmail} required autoComplete="email"></input>

                                                    <span className="invalid-feedback" role="alert">
                                                        <strong>invalid  email address</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control" name="password" value={password} onChange={onChangePassword} required autoComplete="new-password"></input>

                                                    <span className="invalid-feedback" role="alert">
                                                        <strong>invalid password</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" className="form-control" name="password_confirmation" value={password2} onChange={onChangePassword2} required autoComplete="new-password"></input>
                                            </div>
                                        </div>

                                        <div className="row mb-0">
                                            <div className="col-md-6 offset-md-4">
                                                <button type="submit" className="btn btn-primary" onClick={useCallback(() => handleRegister(name, email, password))}>
                                                    Register
                                                </button>
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
