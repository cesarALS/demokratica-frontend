"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie";
import { DemokraticaUser } from "@/types/auth";
import { getUser } from "./apiUtils";

interface AuthContextType {
    user: DemokraticaUser | null;
    handleLogin: (jwtToken: string, user: DemokraticaUser) => void;
    handleLogout: () => void;
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
    
    useEffect(() => {        
        const fetchData = async () => {
            const authCookie = Cookies.get(TOKEN_COOKIE);      
            if (authCookie){
                const response = await getUser(authCookie);
                if(response.status===200 && response.user){
                    setUser(response.user);
                }
                else if(response.status===403){
                    setUser(null);
                    Cookies.remove(TOKEN_COOKIE);
                }
                else{
                    console.log(response.error);
                }
            }
        }

        fetchData();
    }, []);  

    // Función exportable para hacer Login
    const handleLogin = (jwtToken: string, user: DemokraticaUser) => {
        Cookies.set(TOKEN_COOKIE, jwtToken, { expires: 7 });
        setUser(user);
      };
    
    // Función exportable para hacer logout
    const handleLogout = () => {
        Cookies.remove(TOKEN_COOKIE);
        setUser(null);
      };    

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}
