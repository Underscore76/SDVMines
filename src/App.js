import './App.css';
import { MinesDrawer } from './mines';
import { Details } from './components/Details'
function App() {
  return (
    <div className="App">
      <MinesDrawer/>
      <Details/>
    </div>
  );
}

export default App;
