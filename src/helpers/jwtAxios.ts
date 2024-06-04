import axios from "axios";


const jwtAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application-json",
    }
})


export default jwtAxios;
