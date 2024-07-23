// src/api.js
import axios from 'axios';

const API_BASE_URL = '';

const Api = axios.create({
    baseURL: API_BASE_URL,
  });
  const getJwtToken = () => {
    return localStorage.getItem("token");
    // Replace 'yourJwtTokenKey' with the actual key you used for storing the JWT token
  };
//   const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 

//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
//app.use(cors(corsOptions));

  const getApiHeaders = () => {
    const jwtToken = getJwtToken();
    return {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
  };

  // export const getProfiles = (empId) => {
  //   const headers = getApiHeaders(); // Dynamically get headers when making the request
  //   return Api.get(`/register/v1/getreg?empId=${empId}`, headers);
  // };

  export const postUserLogin = (data) => {
    const headers = getApiHeaders();
    return Api.post(`${API_BASE_URL}/api/v1/auth/signin`, data);
  };

 export const postregister = (data) => {
     return axios.post(`${API_BASE_URL}/api/v1/auth/signup`, data);
 };

 export const postLogout = () => {
  return axios.post(`${API_BASE_URL}/api/v1/auth/logout`, );
};
// export const forgotPassword = (email) => {
//     return axios.post(`${API_URL}/forgot-password`, { email });
// };

// export const resetPassword = (newPassword, token) => {
//     return axios.post(`${API_URL}/reset-password?token=${token}`, { newPassword });
// };
