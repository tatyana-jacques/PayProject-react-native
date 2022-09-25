import axios from "axios"

const api = axios.create({
    baseURL: "https://01c5-2804-d57-5529-9b00-cc28-23f2-5292-bae7.sa.ngrok.io"
})

export default api