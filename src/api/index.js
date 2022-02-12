import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
console.log(axios.defaults.baseURL)

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
