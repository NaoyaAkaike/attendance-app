import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState, useRecoilValue } from "recoil"
import { Header } from "../components/Header"
import { userState } from "../components/Recoil"
import { useAxios } from "../components/useAxios"



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
            <Header/>
            <div id="app">
                <main className="py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Home</div>
                                    <div className="card-body">
                                        Hello {userName}!! , Welcome to tokyo
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
