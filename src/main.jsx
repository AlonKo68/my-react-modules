import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Імпорт стилів нормалізації
import "modern-normalize";
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
