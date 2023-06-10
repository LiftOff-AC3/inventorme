import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/CreateItem";
import ItemsList from "./components/ItemsList";
import Registration from "./components/Registration";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Header from "./components/Header";
import UpdateItem from "./components/UpdateItem";

const Protected = ({ children }) => {
   const token = localStorage.getItem("token");
  if(!token) {
    return <Navigate to="/" replace/>;
  }
  return children
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add" element={<Protected><Item /></Protected>}/>
          <Route path="/items" element={<Protected><ItemsList /></Protected>} />
          <Route path="/item/:id" element={<Protected><UpdateItem /></Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
