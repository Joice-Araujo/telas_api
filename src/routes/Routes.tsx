
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shered/contexts";
import { Home } from "../pages";


export  const AppRoutes = () =>{
    // const {toggleTheme} = useAppThemeContext();

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Home/>}/>

            <Route path="/home" element={<Navigate to="/home"/>}/>


            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>

        </Routes>

    );
};