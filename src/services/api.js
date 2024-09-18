import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api",
});

export const createReceita = async (receitaData) => {
    return await api.post("/receitas", receitaData);
};

export const login = async (loginData) => {
    return await api.post("/auth/local", loginData);
};

export const createUsuario = async (usuarioData) => {
    return await api.post("/user", usuarioData);
};


export default {
    createReceita,
    login,
    createUsuario

};




