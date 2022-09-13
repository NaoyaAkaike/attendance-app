import { useRecoilValue } from "recoil";
import { userState } from "./Recoil";
import { useAxios } from "./useAxios";

export const Header = () => {

    //const { userName } = useContext(AuthContext);
    const userName = useRecoilValue(userState);
    const{ handleLogout } = useAxios();

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
                            { (userName == "")
                            ?   <><li className="nav-item">
                                    <a className="nav-link" href="/">Login</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li></>

                            :   <><li className="nav-item dropdown">
                                    <a id="navbarDropdown" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {userName}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item">Logout</a>
                                    </div>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
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