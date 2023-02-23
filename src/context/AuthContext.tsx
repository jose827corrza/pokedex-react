import React, {useState, createContext} from 'react'
import { Auth } from '../types/Auth';

export const AuthContext = createContext<{
    auth?: Auth,
    login?: Function,
    logout?: Function,
}>({});

// Provider

export const  AuthProvider: React.FC = ({children}) => {
    
    const [auth, setAuth] = useState<Auth>()

    const login = (userData: Auth) => {
        setAuth(userData)
    }

    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}