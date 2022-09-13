import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilValue } from "recoil"
import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"
import { userState } from "../components/Recoil"



export const Home = () => {

    const userName = useRecoilValue(userState);
    const navigate = useNavigate();

    useEffect(() => {
        !userName && navigate("/");
    },[])    

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
