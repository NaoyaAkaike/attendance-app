import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "./Auth";

export const Header = () => {

    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    const handleLogout = () => {
        const instance = axios.create({
            withCredentials : true
        })

        instance
            .post("http://localhost:8080/api-logout/")
            .then((response) => {
                console.log("api logout result")
                console.log(response)
                setAuth("")
                navigate("/")
            })
            .catch((error) => {
                console.log("api logout error")
                console.log(error)
            });
        
    }
    return(
        <div className="app">
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Laravel
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">

                        </ul>
    
                        <ul className="navbar-nav ms-auto">
                            { (auth == "")
                            ?   <><li className="nav-item">
                                    <a className="nav-link" href="/">Login</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li></>

                            :   <><li className="nav-item dropdown">
                                    <a id="navbarDropdown" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {auth}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item">Logout</a>
                                    </div>
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                                </li></>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}