import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import { useState } from 'react';

//TODO: add either hooks or booleans to show or hide certain components based on button clicked JY 
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