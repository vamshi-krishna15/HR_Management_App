import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Navbar =() =>{

return(
  <nav className=" relative flex flex-row space-x-96 font-custom">
   <div className="">
   <ul className="flex  justify-start space-x-20 list-none no-underline text-lg">
    <li><a className="no-underline" href="/">Home</a></li>

     <li>
     <Menu as="div" className="relative inline-block text-left ">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-custom text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-none ">
          Company
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 no-underline">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu></li>

   <li><a className="no-underline" href="#">Pricing</a></li>

   <li><a className="no-underline" href="#">Blogs</a></li> 
   </ul>
   </div>
   
   <div className="flex justify-end w-[92%] space-x-8">
   <button className=" text-blue-600 border-blue-500 px-6 py-1 rounded-lg text-lg cursor-pointer" >Book Demo</button>
   


   
   <button className=" text-blue-600 border-blue-500 px-6 py-2 rounded-lg cursor-pointer text-lg" >Login/Signup</button>
   


   
   <button className="bg-blue-500 border-blue-500 text-white px-16 py-1 rounded-lg cursor-pointer text-lg" >Looking for job</button>
   </div>

</nav>

)

}
export default Navbar;