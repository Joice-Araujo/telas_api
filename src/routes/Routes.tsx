import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shered/contexts";


export  const AppRoutes= () =>{
    const {toggleTheme} = useAppThemeContext();

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained"  color="primary" onClick={toggleTheme}>Toggle Theme</Button>}/>

            <Route path="/home" element={<Navigate to="/home"/>}/>


            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>

        </Routes>

    );
};