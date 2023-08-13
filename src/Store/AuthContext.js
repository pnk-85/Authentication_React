import React, {useState} from "react";


const Authcontext = React.createContext({
    token: '',
    isLoggedIn: false,
    login : (token) => {},
    logout : () => {}
})

export const AuthcontextProvider = (props) => {
    const firstToken = localStorage.getItem('token')
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setTimeout (() => {
            localStorage.removeItem('token');
        }, 2000);
        setToken(token);
        localStorage.setItem('token', token)
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        token : token,
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }

    return(
        <Authcontext.Provider value={contextValue} >{props.children}</Authcontext.Provider>
    )
}

export default Authcontext;