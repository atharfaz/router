import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/Gallery';
import Event from './pages/Event';
import Keranjang from './pages/Bucket';
import './App.css';

import { Link, Route, Routes } from 'react-router-dom';
import Bucket from './pages/Bucket';

function App() {
  return (
    <div className=''>
      <div className=''>
        <div className='flex items-center justify-center mb-4 text-xs text-red-600 font-bold uppercase tracking-wide py-4 shadow-xl '>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 no-underline hover:bg-gray-100 transition-all ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out no-underline"
            to="/about"
          >
            About
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out no-underline"
            to="/gallery"
          >
            Galley
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out no-underline"
            to="/Event"
          >
            Event
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out no-underline"
            to="/Bucket"
          >
            Keranjang
          </Link>
        </div>
        <div className='p-6 w-full bg-white rounded x-1 shadow-1g'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/Event" element={<Event />}></Route>
            <Route path="/Bucket" element={<Bucket />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
