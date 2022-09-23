import axios from "axios"

const api = axios.create({
    baseURL: "https://d94c-2804-d57-5529-9b00-18a3-532b-7d4e-940c.sa.ngrok.io"
})

export default api