import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import Home from './pages/home/index';
import Login from './pages/login/login';
import Register from './pages/register/register';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </HelmetProvider>
  </StrictMode>
);