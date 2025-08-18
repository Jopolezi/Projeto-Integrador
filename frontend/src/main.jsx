import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/login';
import Register from './pages/register/register';
import GlobalStyles from './styles/GlobalStyles';
import App from './pages/home/index';

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    <GlobalStyles />
  </StrictMode>
);