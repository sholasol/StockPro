import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "https://localhost:7102/api/"; 

export const loginApi = async(email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            email : email,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const registerApi = async(
    email: string, 
    username: string, 
    password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            email: email,
            username : username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}