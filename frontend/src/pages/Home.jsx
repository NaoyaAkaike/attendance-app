import { Header } from "../components/Header"
import { HeadTtag } from "../components/HeadTag"



export const Home = () => {

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
                                        welcome to tokyo
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
