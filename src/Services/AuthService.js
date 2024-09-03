import axios from "axios"

const api = "http://localhost:5103/api/"

export const loginAPI = async () => {
    try {
        const data = await axios.post(api + "account/login")
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const registerAPI = async () => {
    try {
        const data = await axios.post(api +"account/register")
        return data
    } catch (error) {
        console.log(error);
        
    }
}