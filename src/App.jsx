import './App.css';
import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <>
        <div>
          <Navbar />
          <h2>Movies Lib</h2>
          <Outlet />
        </div>
    </>
  )
}


