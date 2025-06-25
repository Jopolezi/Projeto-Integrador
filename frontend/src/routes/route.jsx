import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Politices from "../pages/policy/Policy";
import Post from "../pages/posts/Post";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/entrar", element: <Login /> },
    { path: "/cadastrar", element: <Register /> },
    { path: "/politicas", element: <Politices /> },
    { path: "/publicar", element: <Post /> },
    // {
    //     path: "/admin", 
    //     element: <Admin />,
    // },
    
]);

export default router;