import './SmartPortal.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function SmartPortal() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest);
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <div className='smartPortal'>
      <h1>Microsoft SSO with React</h1>

      {accounts.length > 0 ? (
        <>
          <p>Welcome {accounts[0].username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Microsoft</button>
      )}
    </div>
  );
}

export default SmartPortal;





// import React, { useState } from "react";
// import "./SmartPortal.css";

// const SmartPortal = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isPasswordHidden, setIsPasswordHidden] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       console.log({ username, password, rememberMe });
//       setIsLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="smartPortalcontainer">
//       {/* LEFT */}
//       <div className="left">
//         <div className="login-box">
//           <h1 className="title">
//             Smart <span className="title-accent">Portal</span>
//           </h1>
//           <h2 className="subtitle">Welcome</h2>
//           <p className="desc">Login to access your workspace</p>

//           {/* Username */}
//           <div className="SmartPortalform-group">
//             <label className="field-label">User Name</label>
//             <div className="input-wrapper">
//               <span className="input-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="#7a3cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="8" r="4"/>
//                   <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="Enter user name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="SmartPortalform-group">
//             <label className="field-label">Password</label>
//             <div className="input-wrapper">
//               <span className="input-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="#7a3cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                   <rect x="5" y="11" width="14" height="10" rx="2"/>
//                   <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
//                 </svg>
//               </span>

//               <input
//                 type={isPasswordHidden ? "password" : "text"}
//                 className="form-input"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <span
//                 className="eye-toggle"
//                 onClick={() => setIsPasswordHidden(!isPasswordHidden)}
//               >
//                 {isPasswordHidden ? (
//                   // Eye OFF
//                   <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
//                     <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
//                     <line x1="1" y1="1" x2="23" y2="23"/>
//                   </svg>
//                 ) : (
//                   // Eye ON
//                   <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                     <circle cx="12" cy="12" r="3"/>
//                   </svg>
//                 )}
//               </span>
//             </div>
//           </div>

//           {/* Options */}
//           <div className="options">
//             <label className="remember-me">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               Remember me
//             </label>
//             <a href="#" className="forgot-link">Forgot password?</a>
//           </div>

//           {/* Login Button */}
//           <button className="login-btn" onClick={handleLogin} disabled={isLoading}>
//             {isLoading ? (
//               "Loading..."
//             ) : (
//               <>
//                 LOGIN
//                 <span className="arrow-badge">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="9 18 15 12 9 6"/>
//                   </svg>
//                 </span>
//               </>
//             )}
//           </button>

//           <p className="signup-text">
//             Don't have an account? <a href="#" className="signup-link">Sign up</a>
//           </p>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="right">
//         <div className="glass-card">
//           <h2 className="card-title">
//             Smart <span className="card-accent">Portal</span>
//           </h2>

//           <p className="card-sub">
//             Your Central Hub for Employees,<br />
//             HR, Managers & Admins
//           </p>

//           <div className="card-divider"></div>

//           <ul className="feature-list">
//             <li className="feature-item">
//               <span className="feat-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//                   <circle cx="9" cy="7" r="4"/>
//                 </svg>
//               </span>
//               <p className="feat-text"><strong>Manage</strong> Tasks & Requests</p>
//             </li>

//             <li className="feature-item">
//               <span className="feat-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
//                   <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//                 </svg>
//               </span>
//               <p className="feat-text"><strong>Access</strong> HR & Services</p>
//             </li>

//             <li className="feature-item">
//               <span className="feat-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
//                   <line x1="18" y1="20" x2="18" y2="10"/>
//                   <line x1="12" y1="20" x2="12" y2="4"/>
//                   <line x1="6" y1="20" x2="6" y2="14"/>
//                 </svg>
//               </span>
//               <p className="feat-text"><strong>Track</strong> Performance</p>
//             </li>

//             <li className="feature-item">
//               <span className="feat-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
//                   <circle cx="18" cy="5" r="3"/>
//                   <circle cx="6" cy="12" r="3"/>
//                   <circle cx="18" cy="19" r="3"/>
//                 </svg>
//               </span>
//               <p className="feat-text"><strong>Collaborate</strong> Securely</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmartPortal;