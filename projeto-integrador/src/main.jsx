import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import GlobalStyles from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home /> 
  </StrictMode>
);