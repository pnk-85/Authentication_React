import React, {useState} from "react";


const Authcontext = React.createContext({
    token: '',
    isLoggedIn: false,
    login : (token) => {},
    logout : () => {}
})

export const AuthcontextProvider = (props) => {
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
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