import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landing/LandingPage';
import Navbar  from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Card from './components/Card/Card';
import Detail from './Detail/Detail';



function App() {
  return (
    <div className="App">

       
       <div>
        <Routes>
        <Route path="/home" element = { <Cards/> }/>
        
        </Routes>
       </div>
    </div>
  );
}

export default App;
