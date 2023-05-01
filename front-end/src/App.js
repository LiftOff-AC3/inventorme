import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import ItemForm from './components/layout/ItemForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Routes>
        
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/additem" element={<ItemForm/>} />
          <Route exact path="/register" element={<Registration/>} />
          
        </Routes>
      </Router>
    </div>
  );
}


export default App;
