import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";


const api = "https://localhost:7102/api/comment/"; 

export const commentPostAPI = async (
    title:string, 
    content:string, 
    symbol: string) => {
    try {
        const data = await axios.post<CommentPost>(api + `${symbol}`,  {
            title: title,
            content: content,
        })
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const commentGetApi = async (symbol:string) => {
    try {
        const data = await axios.get<CommentGet[]>(api + `?symbol=${symbol}`)
        return data;
    } catch (error) {
        handleError(error);
    }
}