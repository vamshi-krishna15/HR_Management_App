import {Routes, Route,Link,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";



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
    
</Routes>
</Router>
  </>
    
  );
}

export default App;
