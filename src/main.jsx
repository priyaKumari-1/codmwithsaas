import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import "odometer/themes/odometer-theme-default.css";
import './index.css';

// // for smart portal
// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./authConfig.js";

import { AuthProvider } from './SmartPortal/auth/hook/auth-provider.jsx';


// const msalInstance = new PublicClientApplication(msalConfig);

//  msalInstance.handleRedirectPromise()
//   .then((response) => {
//     console.log("✅ Redirect promise resolved:", response);
//   })
//   .catch((error) => {
//     console.error("Redirect promise error:", error);
//   });

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    {/* <MsalProvider instance={msalInstance}> */}
    <AuthProvider>
    <App/>
    </AuthProvider>
    {/* </MsalProvider> */}
   </ThemeProvider>
)
