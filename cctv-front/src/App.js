import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import Mod1 from './Components/Dashboard/Mod1';
import Mod2 from './Components/Dashboard/Mod2';
import Mod3 from './Components/Dashboard/Mod3';
import Mod4 from './Components/Dashboard/Mod4';
import Mod5 from './Components/Dashboard/Mod5';
import Mod6 from './Components/Dashboard/Mod6';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/MOD1' element={<Mod1 />} /> {/* MODIFY THE PATH LATER */}
        <Route path='/dashboard/MOD2' element={<Mod2 />} />
        <Route path='/dashboard/MOD3' element={<Mod3 />} />
        <Route path='/dashboard/MOD4' element={<Mod4 />} />
        <Route path='/dashboard/MOD5' element={<Mod5 />} />
        <Route path='/dashboard/MOD6' element={<Mod6 />} />
      </Routes>
    </div>
  );
}

export default App;
