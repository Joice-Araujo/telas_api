import { useTheme } from "@emotion/react";
import { Box,  Button,  Grid,  Input,  Paper,  TextField,  Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


export const NovoProjeto = () => {

    const theme = useTheme();

    return (

        

       
        <><Grid display="flex" alignItems="center" justifyContent="center" maxHeight="100vh">


            <Paper sx={{mt:3, padding:3, borderRadius: 5,  width: '1000px', height: '480px'}} 
     >

                <Typography variant="h4" color="primary">Novo Projeto</Typography>

            
                    <Box>


                        <Box display="flex" flexDirection="column">


                            <Grid item>
                                <TextField id="nome-projeto" label="Nome:" variant="standard" />

                            </Grid>

                            <Grid item>

                                <TextField id="standard-multiline-static" label="Descrição" multiline rows={4}
                                    variant="standard" />

                            </Grid>

                            <Grid item>
                                <Button variant="contained" startIcon={<AddIcon />}>Adicionar Etapa</Button>

                            </Grid>


                        </Box>




                        <Box display="flex" flexDirection="row" >

                            <Button variant="contained" startIcon={<DeleteIcon />} sx={{background:"#292A2D",color:"white"}}>Descartar</Button>
                            <Button variant="contained" startIcon={<AddIcon />}>Criar Projeto</Button>


                        </Box>




                    </Box>


            </Paper>

        </Grid></>
        
        
        
        
       

       

       



    )


}

    