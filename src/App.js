import Navbar from './components/navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Counter from './components/counter';
import Timer from './components/timer';
import Weather from './components/weather';

function App() {
  return (   
  <>
    <Router> 

    <Navbar/>
<Routes>
<Route path="/" element={<Weather />} />
<Route path="/counter" element={<Counter />} />
<Route path="/timer" element={<Timer />} />
</Routes>

    </Router>  
    </>
  );
}

export default App;
