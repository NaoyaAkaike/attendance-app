import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const { children } = props;

    const [ auth, setAuth ] = useState("");

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};