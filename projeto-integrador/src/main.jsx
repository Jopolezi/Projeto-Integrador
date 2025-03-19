import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import home from './pages/home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <home />
  </StrictMode>,
)
