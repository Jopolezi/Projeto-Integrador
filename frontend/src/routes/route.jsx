import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile"
import Politices from "../pages/policy/Policy";
import Post from "../pages/posts/Post";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    
    return token ? children : <Navigate to="/entrar" replace />;
};

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/entrar", element: <Login /> },
    { path: "/cadastrar", element: <Register /> },
    { 
        path: "/perfil", 
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
    { path: "/politicas", element: <Politices /> },
    { 
        path: "/publicar", 
        element: (
            <ProtectedRoute>
                <Post />
            </ProtectedRoute>
        )
    },
]);

export default router;