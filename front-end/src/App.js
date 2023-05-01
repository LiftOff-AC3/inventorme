import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/screens/Registration";
import Landing from "./components/screens/Landing";
import ItemForm from './components/layout/ItemForm';

function App() {
  return (
    <div>
    <Landing />
    <Registration/>
    <ItemForm />
    </div>
  );
}

export default App;
