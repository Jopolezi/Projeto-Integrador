import React, { useState, useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/login/login";
import Profile from "../components/Profile/Profile";
import Politices from "../pages/policy/Policy";
import Post from "../pages/posts/Post";

// const ProtectedRoute = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const validateToken = async () => {
//             const token = localStorage.getItem('token')
            
//             if (!token) {
//                 setLoading(false)
//                 return;
//             }
            
//             try {
//                 const response = await fetch('/api/validate-token', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 })
                
//                 if (response.ok) {
//                     setIsAuthenticated(true)
//                 } else {
//                     localStorage.removeItem('token')
//                 }
//             } catch (error) {
//                 console.error('Erro ao validar token:', error)
//                 localStorage.removeItem('token')
//             }
//             setLoading(false)
//         };
        
//         validateToken();
//     }, []);
    
//     if (loading) {
//         return <div>Carregando...</div>
//     }
    
//     return isAuthenticated ? children : <Navigate to="/entrar" replace />;
// };

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/entrar", element: <Login /> },
    { path: "/cadastrar", element: <Register /> },
    { 
        path: "/perfil", 
        element: (
            // <ProtectedRoute>
                <Profile />
            // </ProtectedRoute>
        )
    },
    { path: "/politicas", element: <Politices /> },
    { 
        path: "/publicar", 
        element: (
            // <ProtectedRoute>
                <Post />
            // {/* </ProtectedRoute> */}
        )
    },
]);

export default router;