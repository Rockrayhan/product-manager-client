import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>

    <Navbar/>
    




      <div>
        <Outlet />
      </div>

    <Footer/>
    </div>
  );
}

export default App;
