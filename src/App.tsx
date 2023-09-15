import {BrowserRouter} from "react-router-dom"
import { AppRoutes } from "./routes/Routes";
import { AppThemeProvider } from "./shered/contexts";





 export const  App = () => {
  return (

    <AppThemeProvider>

    <BrowserRouter>
    
    <AppRoutes/>
    
    </BrowserRouter>
     
    </AppThemeProvider>
    
  );
}

export default App;
