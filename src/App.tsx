import {BrowserRouter} from "react-router-dom"
import { AppRoutes } from "./routes/Routes";
import { Light } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./shered/themes";



 export const  App = () => {
  return (

    <ThemeProvider theme={LightTheme}>

    <BrowserRouter>
    
    <AppRoutes/>
    
    </BrowserRouter>
     
    </ThemeProvider>
    
  );
}

export default App;
