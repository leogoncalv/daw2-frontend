import React from "react"

import ImagemPrincipal from "../../Components/ImagemPrincipal";
import BarraNavegacao from "../../Components/NavBar";
import BoxPrincipal1 from "../../Components/ImagemPrincipal";
import { Box } from "@mui/material";


function PaginaInicial() {

    return (
        <Box>

            <BarraNavegacao />
            <ImagemPrincipal>
                <BoxPrincipal1 />


            </ImagemPrincipal>
        </Box>
    );


}

export default PaginaInicial; 