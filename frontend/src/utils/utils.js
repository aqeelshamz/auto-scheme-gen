import axios from "axios";

const googleApiKey = "AIzaSyBFrn8O362KFIOQWHGmcuiwjpfZsUXig-k";
const api = axios.create({
    baseURL: "http://localhost:6001",
});

export { api, googleApiKey };