import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { userState } from "../function/Recoil"
import { useAxios } from "../function/useAxios"



export const Home = () => {

    const [ userName, setUserName ] = useRecoilState(userState);
    const navigate = useNavigate();
    const { getUser } = useAxios();

    useEffect(() => {
        getUser().then((name) => {
            setUserName(name)
        })
        !userName && navigate("/")
    },[])

    return (
        <>
        <div id="app">
            <Header/>

            <Card cardTitle="Home">
                Hello {userName}!! , Welcome to tokyo
            </Card>

        </div>
        </>
    )
}
