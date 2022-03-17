import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/Gallery';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className=''>
      <div className=''>
        <div className='flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/about"
          >
            About
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/gallery"
          >
            Galley
          </Link>
        </div>
        <div className='p-6 w-full bg-white rounded x-1 shadow-1g'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
