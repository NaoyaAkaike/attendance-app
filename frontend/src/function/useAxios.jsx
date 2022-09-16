import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { userState } from "./Recoil";

export const useAxios = () => {

    const navigate = useNavigate();
    const [ errorMsg, setErrorMsg ] = useState("");
    const setUserName = useSetRecoilState(userState);

    const instance = axios.create({
        withCredentials : true
    })

    const getUser = () => {
        return instance.get('http://localhost:8080/api/user/')
            .then((response) => {
                console.log('● ログイン中のユーザー情報');
                console.log(response.data);
                return response.data.name
            })
            .catch((error) => {
                console.log('未ログイン');
                console.log(error)
                setErrorMsg(error.response.data)
                return "";
            });
    }

    const handleLogin = (email, password) => {
        instance
            .get('http://localhost:8080/sanctum/csrf-cookie/')
            .then(() => {
                instance
                    .post("http://localhost:8080/api-login/", {
                        email: email,
                        password: password
                    })
                    .then((response) => {
                        console.log("api login result");
                        console.log(response)
                        getUser().then((name) => {
                            setUserName(name)
                            navigate("/home")
                        })
                    })
                    .catch((error) => {
                        console.log("api login error")
                        console.log(error)
                        setErrorMsg(error.response.data)
                    })
            })
    };
    
    const handleRegister = (name, email, password) => {
        //navigate("/")
        const instance = axios.create({
            withCredentials : true
        })
        instance
            .get('http://localhost:8080/sanctum/csrf-cookie/')
            .then(() => {
                instance
                    .post("http://localhost:8080/api-register/", {
                        name: name,
                        email: email,
                        password: password
                    })
                    .then((response) => {
                        console.log("api register result");
                        console.log(response)
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log("api register error")
                        console.log(error)
                        setErrorMsg(error.response.data)
                    });
            })
    };

    const handleLogout = () => {
        instance
            .post("http://localhost:8080/api-logout/")
            .then((response) => {
                console.log("api logout result")
                console.log(response)
                setUserName("")
                navigate("/")
            })
            .catch((error) => {
                console.log("api logout error")
                console.log(error)
                setErrorMsg(error.response.data)
            });
    }

    return {
        errorMsg,
        setErrorMsg,
        getUser,
        handleLogin,
        handleRegister,
        handleLogout
      }
}
