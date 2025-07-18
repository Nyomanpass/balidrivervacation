import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AirportsCharter from './pages/AirportsCharter';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {


  useEffect(() => {
    AOS.init({ once: true });
  }, []);


  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/airport' element={<AirportsCharter/>}/>
           <Route path='/gallery' element={<Gallery/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
