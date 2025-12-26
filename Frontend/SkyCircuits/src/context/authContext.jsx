import { createContext,useEffect,useState } from "react";
import axiosInstance from "../api/axiosInstance";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser) setUser(JSON.parse(storedUser))
    },[])

    const login = async (credential) => {
        setLoading(true);
        setError(null);

        try{
            const res = axiosInstance.post('/login',credential);
            const { user,token } = (await res).data;

            setUser(data.user);
            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem(token);
        } catch(err){
            setError(data.message || 'Something Went Wrong');
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ user,login,logout,loading,error }}>
            {children}
        </AuthContext.Provider>
    )

}
