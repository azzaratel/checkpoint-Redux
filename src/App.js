
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heaader from './components/Heaader';
import Todolist from './components/Todolist';


function App() {
  return (
    <div className="App">
    <Heaader/> 

    <Todolist/>
   
    </div>
  );
}

export default App;
