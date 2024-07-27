import {Routes, Route,Link,BrowserRouter as Router ,useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect,lazy,Suspense } from "react";
import  delayImport  from './utilities/delayImport';
import { Tooltip, initTWE } from "tw-elements";
import Pricing from "./components/Pricing";
import Blog from './components/Blog';
import Aboutus from './components/Aboutus';
import Ourteam from './components/Ourteam';
import Careers from './components/Careers';
import ErrorLoading from './components/ErrorLoading';
import { Login } from './components/Login';
import Contact from './components/Contact';
import Dashboard ,{user} from './components/Dashboard';
import Editprofile from './components/Editprofile';


const Home = lazy(() => delayImport(() => import('./components/Home'),3000));

function App() {
  const location = useLocation();
  const noNavbarRoutes = ['/dashboard',`/dashboard/${user}`];

  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  
  
  return (
  <>
<div>
  {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
  <Routes>
  <Route path="/" element= {<Suspense fallback={<div className='loader justify-center mt-96 ml-[44%] size-[50%]'></div>}>{<Home />}</Suspense> }/>

  <Route path="/pricing" element={<Pricing />} />

  <Route path="/blogs" element={<Blog />} />

  <Route path="/about_us" element={<Aboutus />} />

  <Route path="/our_team" element={<Ourteam />} />

  <Route path="/careers" element={<Careers />} />

  <Route path="*"  element={<ErrorLoading />} />

  <Route path="/login"  element={<Login />} />

  <Route path="/contact"  element={<Contact />} />

  <Route path="/dashboard"  element={<Dashboard />} />

  <Route path="/dashboard/:name"  element={<Editprofile />} />
  
</Routes>
</div>
  </>
    
  );
}
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
