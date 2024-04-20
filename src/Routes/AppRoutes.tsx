import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";


const AppRoutes: React.FC = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage />}/>

                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;