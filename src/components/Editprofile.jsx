import React from 'react';
import Logo from '../images/logo.png';

const Editprofile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a className="" href="/dashboard"><img className="ml-16 w-44 h-full" src={Logo}></img></a>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg  p-2 w-96 ml-96"
          />
          <div className="flex space-x-4">
            <button className="relative">
              <span className="material-icons">notifications</span>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button>
              <span className="material-icons">message</span>
            </button>
            <button>
              <span className="material-icons">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">Content for the first card goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">Content for the second card goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">Content for the third card goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Editprofile;
