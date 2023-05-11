import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/layout/Registration";
import Landing from "./components/layout/Landing";
import Login from "./components/layout/LoginPage";

function App() {
  function Navigation() {
        const location = useLocation();
        const isRegistrationPage = location.pathname === '/register';
        const isLoginPage = location.pathname === '/login';

        const linkStyle = {
        textDecoration: "none"
        }
        return (
          <nav>
            <ul>
              <div id="left-nav">
              <li>
                <Link to="/" style={linkStyle}>Home</Link>
              </li>
              </div>
              <div id="right-nav">
              {!isLoginPage && (
              <li>
                <Link to="/login" style={linkStyle}>Login</Link>
              </li>
              )}
              {!isRegistrationPage && (
              <li>
                <Link to="/register" style={linkStyle}>Register</Link>
               </li>
               )}
               </div>
            </ul>
          </nav>
        );
      }

  return (
  <div>
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
              </Routes>
          </BrowserRouter>
   </div>
  );
}

export default App;
