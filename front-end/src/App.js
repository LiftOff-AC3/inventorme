import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/layout/SignUp";
import Landing from "./components/layout/Landing";
import Login from "./components/layout/LoginPage";

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLanding, setShowLanding] = useState(true)

  function handleLogin() {
    setShowLogin(true);
    setShowRegistration(false);
    setShowLanding(false);
  }

  function handleCreateAccount() {
    setShowRegistration(true);
    setShowLogin(false);
    setShowLanding(false);
  }
  
  return (
      <>
        { showLanding && <Landing handleCreateAccount= { handleCreateAccount} handleLogin={ handleLogin} /> }
        { showRegistration && <Registration /> }
        { showLogin && <Login/> }
      </>
    );
}

export default App;