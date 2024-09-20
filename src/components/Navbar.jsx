import React from "react";
import PhoneInputComponent from "./PhoneInputComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useRef } from "react";
import { Link} from "react-router-dom";
import Logo from '../images/logo.png';
import  Login  from "../components/Login";

const handleSubmit = async (e) => {
  e.preventDefault();
}
const Navbar =() =>{

 
  const [modalShow, setModalShow] = useState(false);

  
  const paragraphRef = useRef(null);

  // const togglePopover = () => {
   
  //   setShowPopup(!showPopup);
  // };
  

  
return(
  <nav className=" flex flex-row space-x-12 font-custom">
    <a className="" href="/"><img className="ml-16 w-52 h-full" src={Logo}></img></a>
   <div className="">
    
  

   <ul className="flex  justify-start space-x-20 list-none no-underline ">
  

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
              href="/about_us"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
              About Us
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/our_team"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
            Our Team
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/careers"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
            >
             Careers
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu></li>

   <li><a className="no-underline" href="/pricing">Pricing</a></li>

   <li><a className="no-underline" href="/blogs">Blogs</a></li> 
   </ul>
   </div>
   
   <div className="flex justify-end w-[92%] space-x-8">
   <button className=" text-blue-600 border-blue-500 px-6 py-1 rounded-lg text-lg cursor-pointer h-16" 
   onClick={() =>
    window.scrollTo({
      top: paragraphRef.current.focus(),
      behavior: "smooth"
    })
  }
   >Book Demo</button>
   

   <Link to="/login"><button className=" text-blue-600 border-blue-500 px-6 py-2 rounded-lg cursor-pointer text-lg h-16" variant="primary" /*onClick={() => setModalShow(true)}*/ >Login/Signup </button></Link>
   {/* {modalShow && <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />}
   {/* {showPopup && ( }
    <>
    <div className=" min-h-screen bg-gray-100 ">
           <PhoneInputComponent show={showPopup} onClose={togglePopover} />
         </div>
     <button
     type="button"
     onClick={togglePopover}
     className="text-gray-500 hover:text-gray-700 w-24 h-52"
   >
     Cancel
   </button>
   </>
   )} */}

   <button className="bg-blue-500 border-blue-500 text-white px-16 py-1 rounded-lg cursor-pointer text-lg h-16"  >Looking for job element</button>
   </div>

</nav>

)

}
export default Navbar;