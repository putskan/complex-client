import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL || "http://127.0.0.1:8000/";

export default {
    getQuestionList(page, size) {
        const url = "/api/questions/"
        const params = {
            page: page,
            size: size
        }
        return axios.get(url, { params })
    }        
}
