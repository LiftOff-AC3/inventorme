import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import Login from "./components/screens/Login";
import { useState } from 'react';

//TODO: add either hooks or booleans to show or hide certain components based on button clicked JY 
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
      <div>
          {showRegistration ? (
          <Registration />
        ) : (
          <Landing handleCreateAccount={handleCreateAccount} />
        )}

      </div>
    );
}

export default App;

      /*
        I can't figure out how to get this to run in the return statement,

         {showLogin ? (
         <LoginPage /> : (
         <Landing handleLogin={handleLogin} />
         )}

      */