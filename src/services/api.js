import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";

const api = axios.create({
    baseURL: "http://localhost.1337/api",
});

export const createVcNaCozinha = async () => {
    return await api.post("url-base-de-comunicacao", Colecoes do back);
};
export default {
    createVcNaCozinha

};






const listaGastos = api.listaGastos;
console.log(listaGastos);

useEffect(() => {
    api.listaGastos().then(response) => {
        console.log { "esses sao os dados");
console.log(response.data.data)





return (

    <Box>

        <NavBar />

    </Box>

    sx =
)