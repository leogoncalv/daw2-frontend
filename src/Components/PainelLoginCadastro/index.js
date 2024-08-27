import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PainelLoginCadastro() {

    return (

        <div>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />


            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>

        </div>



    );


}

export default PainelLoginCadastro; 