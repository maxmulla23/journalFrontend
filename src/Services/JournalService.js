import axios from "axios";

const api = "http://localhost:5103/api/Journal"

export const postJournal = async () => {
    try {
        const data = await axios.post(api)
    } catch (error) {
        console.log(error);
        
    }
}