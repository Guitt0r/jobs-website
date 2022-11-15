import axios from "axios";

const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

export const fetchData = async () => {
    const res = await axios.get(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return res.data
}