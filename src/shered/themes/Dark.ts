import {createTheme} from "@mui/material";
import { blue, grey } from "@mui/material/colors";


export const DarkTheme = createTheme({
    // configuração da paleta de cores 
    palette:{
        //cor primaria cor do modo claro, ela é usada em botões coisas com mais destaque
        primary:{ 
            main: '#B6F3F8',   //a cor mais usada
            dark: ' #53C4CD',     //é a cor primaria um pouco mais escura, tipo pra um hover
            light: '#B6F3F8',
            contrastText: '#000000',  //faz constraste com a cor primaria

        },

        secondary:{
            main: grey[800],  
            dark: grey[700],     
            light: blue[500],
            contrastText: '#ffffff',
        },

        background:{
            default: '#292A2D',  //usado no fundo do site
            paper:'#1E1E1E' ,    //usado dentro de card
        }
    }
});

