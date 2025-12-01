import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-cyan/theme.css";  // a theme — you can choose other built-in themes
import "primereact/resources/primereact.min.css";                // core PrimeReact styles
import "primeicons/primeicons.css";                              // icons (optional but common)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
