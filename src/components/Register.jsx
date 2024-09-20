import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import { postregister } from '../services/Api';
import * as Yup from 'yup';
import { useFormik } from "formik";


const Register =  () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

const formik = useFormik({
  initialValues :{
    lastName: "",
    firstName: "",
    email:"",
    password:"",
    username:""
  },
validationSchema :Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .max(50, 'Name is too long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is required'),
  })
});

  const handleRegister =  (e) => {
    e.preventDefault();
    // Add registration logic here
    try{
  const data = { firstName, lastName, email, username, password };
  const response =  postregister(data);
  console.log(response);
  navigate('/login')
    }catch(error){

      console.error('There was an error logging in!', error);
    }

  };

  

  return (
    <div className="container-f3">
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;