import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> 
  <GoogleOAuthProvider clientId='424432542042-u9sh1314do7s5nlnsbm40c83rj7sb097.apps.googleusercontent.com'> 
      <ShareContext>
       <AuthContext>
        <App />
        </AuthContext>
      </ShareContext>
  </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
