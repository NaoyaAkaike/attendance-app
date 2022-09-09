import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"

export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

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

    const handleRegister = () => {
        navigate("/")
        // const instance = axios.create({
        //     withCredentials : true
        // })
        // instance
        //     .get('http://localhost:8080/sanctum/csrf-cookie/')
        //     .then(() => {
        //         instance
        //             .post("http://localhost:8080/api-register/", {
        //                 name: name,
        //                 email: email,
        //                 password: password
        //             })
        //             .then((response) => {
        //                 console.log("api register result");
        //                 console.log(response)
        //                 navigate("/login")
        //                 //getUser()
        //             })
        //             .catch((error) => {
        //                 console.log("api register error")
        //                 console.log(error)
        //             });
        //     })
    }
    return (
        <>
            <HeadTtag></HeadTtag>
            <Header></Header>
            <div class="app">
                <main class="py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">Register</div>

                                    <div class="card-body was-validated" noValidate>

                                        <div class="row mb-3">
                                            <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                                            <div class="col-md-6">
                                                <input id="name" type="text" class="form-control" name="name" value={name} onChange={onChangeName} required autocomplete="name" autofocus></input>

                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>invalid name</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                            <div class="col-md-6">
                                                <input id="email" type="email" class="form-control" name="email" value={email} onChange={onChangeEmail} required autocomplete="email"></input>

                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>invalid  email address</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                            <div class="col-md-6">
                                                <input id="password" type="password" class="form-control" name="password" value={password} onChange={onChangePassword} required autocomplete="new-password"></input>

                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>invalid password</strong>
                                                    </span>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                            <div class="col-md-6">
                                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" value={password2} onChange={onChangePassword2} required autocomplete="new-password"></input>
                                            </div>
                                        </div>

                                        <div class="row mb-0">
                                            <div class="col-md-6 offset-md-4">
                                                <button type="submit" class="btn btn-primary" onClick={handleRegister}>
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
