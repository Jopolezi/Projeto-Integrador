import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import BicoPosting from './pages/posts/jobPost';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicar-vaga" element={<BicoPosting />} />
      </Routes>
    </Router>
  </StrictMode>
);