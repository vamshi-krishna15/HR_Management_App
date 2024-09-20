import React from 'react';
import Jobtabs  from './Jobtabs';
import Profile  from './Profile';
import { Progress } from "@material-tailwind/react";
import Logo from '../images/logo.png';
//import "../index.css";


export const user = 'vamshi'
const Dashboard = () => {
  
  return (
    <div className=" w-[99%] h-screen bg-blue-500 fixed">
      <header className="  ">
        
        <div className=" w-screen container px-2 py-0 flex justify-between items-center fixed bg-white" >
        <a className="" href="/dashboard"><img className="ml-16 w-44 h-full" src={Logo}></img></a>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg p-2 w-96 ml-96"
          />
          <div className="flex space-x-4">
            <button className="relative">
              <span className="material-icons">notifications</span>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">10</span>
            </button>
            <button>
              <span className="material-icons">message</span>
            </button>
            <div>
              <span className="font-bold" ><Profile /></span>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 py-4">
        <div className="grid grid-cols  md:grid-cols-4 gap-5 mt-[6%]">
          <div className=" flex-col  mt-40 bg-white rounded-lg  h-96 w-96 shadow-2xl justify-center">
          <div className='flex ml-44 w-full mt-8'>
          <button className="flex justify-center material-icons  ">
            <a className="" href= {`/dashboard/${user}`}><span className="">account_circle</span></a>
            </button>
            
            </div>
            <div className='flex mt-2 justify-center'>
              <h4>Vamshi Krishna</h4>
              </div>
              <div className='flex justify-center '>
              <h5>Account Director</h5>
              </div>
              <div className='flex ml-20 justify-center w-52'><Progress value={90} />
              </div>
              <div className='text-sm text-center'><p>Unlock your profile's potential! Complete your profile for maximum visibility.</p></div>
              <div className='mt-4 ml-24 mb-6'>
                <button>
               <a  className='no-underline' href={`/dashboard/${user}`}>View & Complete Proflie</a>
                </button>
              </div>
          </div>

          <div className=" bg-white rounded-lg h-[10%] w-full col-end-1 col-end-4 col-span-2">
          { <Jobtabs /> }
          </div>
          <div className="bg-white p-6 rounded-lg shadow-2xl w-96 h-96">
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">Content for the third card goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
