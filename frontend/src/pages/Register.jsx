import { useCallback, useState } from "react";
import { Button } from "../components/button/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header"
import { EmailTextbox } from "../components/textbox/EmailTextbox";
import { NameTextbox } from "../components/textbox/NameTextbox";
import { PasswordTextbox } from "../components/textbox/PasswordTextbox";
import { useAxios } from "../function/useAxios";

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
        <div id="app">
            <Header/>
            <Card cardTitle="Register">
                <NameTextbox label="Name" onChange={onChangeName}>
                    {name}
                </NameTextbox>

                <EmailTextbox label="Email Address" onChange={onChangeEmail}>
                    {email}                                        
                </EmailTextbox> 

                <PasswordTextbox label="Password" onChange={onChangePassword}>
                    {password}
                </PasswordTextbox>

                <PasswordTextbox label="Confirm Password" onChange={onChangePassword2}>
                    {password2}
                </PasswordTextbox>

                <div className="row mb-0">
                    <div className="col-md-6 offset-md-4">
                        <Button label="Register" onClick={useCallback(() => handleRegister(name, email, password))} />
                    </div>
                </div>
            </Card>
        </div>
        </>
    )
}
