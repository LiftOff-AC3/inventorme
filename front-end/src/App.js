import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/layout/CreateItemForm";
import Registration from "./components/layout/Registration";
import Landing from "./components/layout/Landing";
import Login from "./components/layout/LoginPage";
import Navigation from "./components/layout/Navigation"

function App() {

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
