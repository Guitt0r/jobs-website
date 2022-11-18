import axios from "axios";
import {JobType} from "../types/types";

const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

export const fetchData = async (): Promise<JobType[]> => {
    const res = await axios.get<JobType[]>(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}