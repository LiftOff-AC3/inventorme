import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/CreateItem";
import ItemsList from "./components/ItemsList";
import Registration from "./components/Registration";
import Landing from "./components/Landing";
import Login from "./components/Login";
import UpdateItem from "./components/UpdateItem";
import Navigation from "./components/Navigation";

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
          <Route path="/items" element={<ItemsList />} />
          <Route path="/update" element={<UpdateItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
