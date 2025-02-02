"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Cookies from "js-cookie";

interface AuthContextType {
    user: string | null;
    handleLogin: (user: string) => void;
    handleLogout: () => void;
}

const USER_COOKIE = "user"
const AuthContext = createContext<AuthContextType | null>(null);

// Hook que deben importar los componentes
export function useAuthContext(){
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
}

export function AuthProvider({ children }: {children: React.ReactNode}){
    const [user, setUser] = useState<string | null >(null);

    // Escucha cambios en la cookie con un intervalo
    useEffect(() => {
        const checkCookie = () => {
        const newUser = Cookies.get(USER_COOKIE) || null;
        if (newUser !== user) {
            setUser(newUser);
        }
        };

        const interval = setInterval(checkCookie, 2000); // Revisa cada 2 segundos
        return () => clearInterval(interval);
    }, [user]);
    
    // Escucha cambios en otra pestaña
    useEffect(() => {
        const handleStorageChange = () => {
        setUser(Cookies.get(USER_COOKIE) || null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);    

    // Función exportable para hacer Login
    const handleLogin = (user: string) => {
        Cookies.set(USER_COOKIE, user, { expires: 7 });
        setUser(user);
      };
    
    // Función exportable para hacer logout
    const handleLogout = () => {
        Cookies.remove(USER_COOKIE);
        setUser(null);
      };    

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}
