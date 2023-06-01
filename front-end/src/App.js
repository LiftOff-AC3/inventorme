import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/CreateItem";
import ItemsList from "./components/ItemsList";
import Registration from "./components/Registration";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Header from "./components/Header"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add" element={<Item />} />
          <Route path="/items" element={<ItemsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
