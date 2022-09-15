import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/button/Button";
import { LinkButton } from "../components/button/LinkButton";
import { Card } from "../components/Card";
import { Header } from "../components/Header"
import { LabeledCheckBox } from "../components/LabeledCheckBox";
import { EmailTextbox } from "../components/textbox/EmailTextbox";
import { PasswordTextbox } from "../components/textbox/PasswordTextbox";
import { useAxios } from "../function/useAxios";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleLogin } =useAxios();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
        <div id="app">
            <Header/>

            <Card cardTitle="Login">
                <EmailTextbox label="Email Address" onChange={onChangeEmail}>
                    {email}                                        
                </EmailTextbox> 

                <PasswordTextbox label="Password" onChange={onChangePassword}>
                    {password}
                </PasswordTextbox>

                <LabeledCheckBox label="Remember Me" />

                <div className="row mb-0">
                    <div className="col-md-8 offset-md-4">
                        <Button label="Login" onClick={useCallback(() => handleLogin(email, password))} />

                        <LinkButton label="Forgot Your Password?" onClick={()=> navigate("./password/email")} />
                    </div>
                </div>
            </Card>
        </div>
        </>
    )
} 

