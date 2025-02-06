"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie";
import { DemokraticaUser } from "@/types/auth";
import { changeUsername, deleteAccount, getUser } from "./apiUtils";

interface AuthContextType {
    user: DemokraticaUser | null;
    handleLogin: (jwtToken: string, user: DemokraticaUser) => void;
    handleLogout: () => void;
    handleUsernameChange: (newUsername: string) => Promise<boolean>
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
    
    const fetchUser = async () => {
        console.log("Aquí estamos")
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
    }

    useEffect(() => {
        fetchUser()
    }, [])

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

    const handleUsernameChange = async (newUsername: string) => {
        async function sendNewUsername() {
            
            let success = false;
            
            // Falta manejar el error acá
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

        }

        const succ = await sendNewUsername();
        console.log(succ);
        return succ;
    };

    /*
    const handleAccountDeletion = () => {
        async function deleteAcc(){
            if(user){
                
                const cookie = Cookies.get(TOKEN_COOKIE)
                if(Cookies.get(TOKEN_COOKIE)){
                    const res = await deleteAccount(user.email, cookie)
                }
            }
        }

        deleteAcc();
    }
    */

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout, handleUsernameChange}}>
            {children}
        </AuthContext.Provider>
    );
}
