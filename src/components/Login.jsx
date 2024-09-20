import React, { useState, useEffect } from 'react';
import {useNavigate,   Link } from 'react-router-dom';
import logogoogle from "../images/Google-logo.png";
import logoLinkedin from "../images/linkedin-logo.png";
import { postUserLogin } from '../services/Api';



const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const data={
       email: email,
      password:password,
    }
    console.log(data)
    const values ={...data}
    try {
      const response = await postUserLogin(data);
      
      if (response.status === 200) {
      
        localStorage.setItem("token", response.data.jwt);
        if (response.data.role=data) {
          
          navigate("/dashboard", { state: { data: data } });
       
        }
      }
    }catch (error) {
      
      console.error('There was an error logging in!', error);
    }
   console.log(values)
   
  }
  

  return (
    
  <>
  
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
  
  
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
        <label htmlFor="email"  className="block text-sm font-medium leading-6 text-gray-900">UserEmail
        </label>
        <div className="mt-2">
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required />
           </div>
           </div>
           <div>
       <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
         </div>
         </div>
         <div>
        <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> 
        Login</button>
        </div>
      </form>
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    {/* </div>
    <div className="social-login">
        <p>Sign in with your Google or LinkedIn account:</p>

        {/* <div className="social-login-buttons" /> }
        <div className="social-1" > 
        <a href="https://accounts.google.com/login" target="_blank" rel="noopener noreferrer">
          <img src={logogoogle}  alt="Google Sign In" /> 
         <p> Google Sign In</p>
        </a></div>
        <div className="social-2" >
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <img src={logoLinkedin} alt="LinkedIn Sign In" /> 
          <p>LinkedIn sign in </p>
        </a></div> 
      </div> */}
      
      </>
  );
}
  





export default Login;