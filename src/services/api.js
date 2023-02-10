import axios from "axios"

const api = axios.create({
    baseURL: "https://7fce-2804-d57-554d-0-35a0-ea75-e056-a6a2.sa.ngrok.io"
})

export default api