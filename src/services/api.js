import axios from "axios";

const api = axios.create({
    baseURL: "url-base-de-comunicacao", //http://localhost.1337/api
});

export const createVcNaCozinha = async () => {
    return await api.post("url-base-de-comunicacao", Colecoes do back);
};
export default {
    createVcNaCozinha

};