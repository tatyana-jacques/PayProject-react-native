import axios from "axios"

const api = axios.create({
    baseURL: "https://66a9-2804-d57-5529-9b00-3d0b-e747-9321-77d1.sa.ngrok.io"
})

export default api