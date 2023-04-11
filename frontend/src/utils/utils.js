import axios from "axios";

const googleApiKey = "AIzaSyBFrn8O362KFIOQWHGmcuiwjpfZsUXig-k";
const api = axios.create({
    baseURL: "http://localhost:3001",
});

export { api, googleApiKey };