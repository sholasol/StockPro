import { UserProfile } from "../Models/User"
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../services/authservice";
import { toast } from "react-toastify";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (
            email: string, 
            username: string, 
            password: string,
            ) => void;

    loginUser: ( 
            username: string, 
            password: string
            ) => void;

    logout: () => void;

    isLoggedIn: () => boolean;
};

type props = {children: React.ReactNode};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children}: props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        email: string, 
        username:string, 
        password:string) => {
        await registerApi(email, username, password).then((res)=>{
            if(res) {
                localStorage.setItem("token", res?.data.token);
                const userobj = {
                    userName: res?.data.userName,
                    email: res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userobj));
                setToken(res?.data.token);
                setUser(userobj!);
                toast.success("Login Succes!");
                navigate("/search");
            }
        }).catch((e) => toast.warning("Server error occured"));
    };

    const loginUser = async (
        username:string, 
        password:string) => {
        await loginApi( username, password).then((res)=>{
            if(res) {
                localStorage.setItem("token", res?.data.token);
                const userobj = {
                    userName: res?.data.userName,
                    email: res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userobj));
                setToken(res?.data.token);
                setUser(userobj!);
                toast.success("Login Succes!");
                navigate("/search");
            }
        }).catch((e) => toast.warning("Server error occured"));
    };

    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    };

    return (
        <UserContext.Provider value={{loginUser, user, token, logout, isLoggedIn, registerUser}}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};