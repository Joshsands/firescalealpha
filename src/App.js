import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Datasheets from './pages/Datasheets';
import Portfolio from './pages/Portfolio';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>

<Navigation />
<Routes>

<Route exact path="/" element={<Home />} />
<Route exact path="/publications" element={<Publications />} />
<Route exact path="/datasheets" element={<Datasheets />} />
<Route exact path="/portfolio" element={<Portfolio />} />
<Route exact path="/about" element={<About />} />

</Routes>

</Router>

    </div>
  );
}

export default App;
