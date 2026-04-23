import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import "odometer/themes/odometer-theme-default.css";
import './index.css';


// for smart portal
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig.js";


const msalInstance = new PublicClientApplication(msalConfig);



createRoot(document.getElementById('root')).render(
  // <ThemeProvider>
    <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
  // </ThemeProvider>
)
