import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
