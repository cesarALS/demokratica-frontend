"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie";
import { DemokraticaUser } from "@/types/auth";
import { changeUsername, createUser, deleteAccount, getUser, login } from "../apiUtils/apiAuthUtils";
import LoadingScreen from "@/templates/1.molecules/6.LoadingScreen";

interface AuthContextType {
    user: DemokraticaUser | null;
    handleLogin: (email: string, password: string) => Promise<number>;
    handleUserCreation: (email: string, username: string, password: string) => Promise<number>
    handleLogout: () => void;
    handleUsernameChange: (newUsername: string) => Promise<boolean>;
    handleAccountDeletion: (ps: string) => Promise<boolean>;
    getCookie: () => string | undefined;
}

const TOKEN_COOKIE = "token"
const AuthContext = createContext<AuthContextType | null>(null);

// Hook que deben importar los componentes
export function useAuthContext(){
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
}

export function AuthProvider({ children }: {children: React.ReactNode}){
    const [user, setUser] = useState<DemokraticaUser | null >(null);    
    const [loading, setLoading] = useState(true); // Estado de carga
    
    const getCookie = () => {
        return Cookies.get(TOKEN_COOKIE);
    }    
    
    const fetchUser = async () => {
        const authCookie = Cookies.get(TOKEN_COOKIE);      
        if (authCookie){
            const response = await getUser(authCookie);
            if(response.status===200 && response.data?.user){
                setUser(response.data.user);
            }
            else if(response.status===403){
                setUser(null);
                Cookies.remove(TOKEN_COOKIE);
            }
            else{
                console.log(response.error);
            }
        }        
        setLoading(false); 
    }

    useEffect(() => {
        fetchUser()
    }, [])

    // Función exportable para hacer Login
    const handleLogin = async (email: string, password: string) => {
        const res = await login(email, password);
        if (res.status === 200 && res.data?.jwtToken && res.data.user) {            
            Cookies.set(TOKEN_COOKIE, res.data.jwtToken, { expires: 7 });
            setUser(res.data.user);
        }
        return res.status;    
    }

    const handleUserCreation = async (email: string, username: string, password: string) => {
        const res = await createUser(email, username, password);
        if (res.status === 201 && res.data?.jwtToken && res.data?.user) {
            Cookies.set(TOKEN_COOKIE, res.data.jwtToken, { expires: 7 });
            setUser(res.data.user);
        }
        return res.status;
    }
    
    // Función exportable para hacer logout
    const handleLogout = () => {
        Cookies.remove(TOKEN_COOKIE);
        setUser(null);
    };    

    const handleUsernameChange = async (newUsername: string) => {

        let success = false;
        
        if(user){                
            const cookie = Cookies.get(TOKEN_COOKIE)
            if(cookie){
                const res = await changeUsername(user.email, cookie, newUsername);
                if(res.status === 200) {                    
                    if (res.data){
                        user.username = newUsername;                        
                        Cookies.set(TOKEN_COOKIE, res.data.jwtToken, {expires: 7})
                        success = true;
                    }                    
                }
            } 
        } 
        
        return success;    
    };

    
    const handleAccountDeletion = async (ps: string) => {                    
        let success = false;
        
        if(user){                
            const cookie = Cookies.get(TOKEN_COOKIE)
            if(cookie){
                const res = await deleteAccount(user.email, ps, cookie);                
                if(res.status === 200) success = true;
            }
        }
        return success;                
    }
    
    if(loading) return <LoadingScreen/>

    return (
        <AuthContext.Provider value={{user, handleLogin, handleUserCreation, handleLogout, handleUsernameChange, handleAccountDeletion, getCookie}}>
            {children}
        </AuthContext.Provider>
    );
}
