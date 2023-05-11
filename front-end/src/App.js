import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/layout/Registration";
import Landing from "./components/layout/Landing";
import Login from "./components/layout/LoginPage";
import ItemsList from "./components/layout/ItemsListComponent";

function App() {

  const [showLanding, setShowLanding] = useState(true);
  const [showViewItems, setViewItems] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false);

  function handleLogin() {
    setShowLogin(true);
    setShowRegistration(false);
    setShowLanding(false);
    setViewItems(false);
  }

  function handleCreateAccount() {
    setShowRegistration(true);
    setShowLogin(false);
    setShowLanding(false);
    setViewItems(false);
  }

  function handleViewItems() {
    setViewItems(true);
    setShowRegistration(false);
    setShowLogin(false);
    setShowLanding(false);
  }

  return (
    <>
      {showLanding && <Landing handleCreateAccount={handleCreateAccount} handleLogin={handleLogin} handleViewItems={handleViewItems} />}
      {showRegistration && <Registration />}
      {showLogin && <Login />}
      {showViewItems && <ItemsList />}
    </>
  );
}

export default App;