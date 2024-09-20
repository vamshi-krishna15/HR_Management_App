import React from 'react';
import  { useState } from 'react';
import {user} from './Dashboard'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons">account_circle</span>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href={`/dashboard/${user}`} className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-200  no-underline" role="menuitem">
              My Profile
            </a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-200 no-underline" role="menuitem">
              Support
            </a>
            <a href='/' className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-200  no-underline" role="menuitem">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
