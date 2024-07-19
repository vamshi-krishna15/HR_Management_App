import {Routes, Route,Link,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";
import Pricing from "./components/Pricing";
import Blog from './components/Blog';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Careers from './components/Careers';


function App() {
  
  useEffect(() => {
    initTWE({ Tooltip });
  }, []);
  
  return (
  <>
  <Router>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/blogs" element={<Blog />} />
  <Route path="/about_us" element={<Aboutus />} />
  <Route path="/our_team" element={<Ourteam />} />
  <Route path="/careers" element={<Careers />} />
</Routes>
</Router>
  </>
    
  );
}

export default App;
