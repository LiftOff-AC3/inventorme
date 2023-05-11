import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/layout/CreateItemForm"
import Registration from "./components/layout/Registration";
import Landing from "./components/layout/Landing";
import Login from "./components/layout/LoginPage";

function App() {
  function Navigation() {
        const location = useLocation();
        const isRegistrationPage = location.pathname === '/register';
        const isLoginPage = location.pathname === '/login';
        const isAddItemPage = location.pathname === '/add';
        const isLandingPage = location.pathname === '/';

        const linkStyle = {
        textDecoration: "none"
        }

        return (
          <nav>
              <div>
              {isLandingPage && (
                 <div class="landing-nav">
                    <Link class="landing-nav-link"  to="/login" style={linkStyle}>Login</Link>
                    <Link class="landing-nav-link"  to="/register" style={linkStyle}>Register</Link>
                    <Link class="landing-nav-link"  to="/add" style={linkStyle}>Add</Link>
                 </div>
              )}

              {isLoginPage && (
                 <div class="login-nav">
                   <Link class="login-nav-link"  to="/" style={linkStyle}><img id="logo" src='logo_transparent.png' alt='logo' className="float-start"></img></Link>
                   <Link class="login-nav-link"  to="/register" style={linkStyle}>Register</Link>
                </div>
              )}

              {isRegistrationPage && (
                  <div class="register-nav">
                     <Link class="register-nav-link"  to="/" style={linkStyle}><img id="logo" src='logo_transparent.png' alt='logo' className="float-start"></img></Link>
                     <Link class="register-nav-link"  to="/login" style={linkStyle}>Login</Link>
                   </div>
              )}

              {isAddItemPage && (
                   <div class="add-nav">
                      <Link class="add-nav-link"  to="/" style={linkStyle}><img id="logo" src='logo_transparent.png' alt='logo' className="float-start"></img></Link>
                      <Link class="add-nav-link"  to="" style={linkStyle}>Log Out</Link>
                   </div>
              )}
              </div>
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
                <Route path="/add" element={<Item />} />
              </Routes>
          </BrowserRouter>
   </div>
  );
}

export default App;
