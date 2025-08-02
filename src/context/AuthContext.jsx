import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const allValues=useAuth();
    return (
        <>
            <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
        </>
    );
}
export default AuthContext;