import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import { useState } from 'react';


function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLanding, setShowLanding] = useState(true)

  function handleCreateAccount() {
    setShowRegistration(true);
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
