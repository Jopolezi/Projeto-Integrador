import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile"
import Politices from "../pages/policy/Policy";
import Post from "../pages/posts/Post";


const ProtectedRoute = ({children}) => {
     
}

const TokenLayout = () => {
    return <Outlet />
}

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/entrar", element: <Login /> },
    { path: "/cadastrar", element: <Register /> },
    { path: "/perfil", element: <Profile />},
    { path: "/politicas", element: <Politices /> },
    { path: "/publicar", element: <Post /> },
    
]);

export default router;