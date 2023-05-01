import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";

//TODO: add either hooks or booleans to show or hide certain components based on button clicked JY 
function App() {
  return (
    <div>
    <Landing />
    <Registration/>
    </div>
  );
}

export default App;
