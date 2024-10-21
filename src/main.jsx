// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthcontextProvider from './Components/AuthContext';
createRoot(document.getElementById('root')).render(<AuthcontextProvider>
    <App></App>
   </AuthcontextProvider> );
