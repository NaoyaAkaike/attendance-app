import { useState } from "react";
import { Header } from "../../components/Header"

export const Email = () => {
    const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <Header/>
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
                                            <input id="email" type="email" className="form-control" name="email" value={email} onChange={onChangeEmail} required autoComplete="email" autoFocus></input>

                                                <span className="invalid-feedback" role="alert">
                                                    <strong> invalid mail address </strong>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="row mb-0">
                                            <div className="col-md-8 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Send Password Reset Link
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
