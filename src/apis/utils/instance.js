import axios from "axios";

export const instance = axios.create({
// 로드시 실행
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});

export default instance;