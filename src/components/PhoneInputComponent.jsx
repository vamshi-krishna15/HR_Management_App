import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CountryDropdown from './CountryDropdown';
import '../index.css'; // Import your Tailwind CSS styles

const countries = [
  { name: 'India', code: 'in' },
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Australia', code: 'au' },
  { name: 'New Zealand', code: 'nz' },
];

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className=" flex p-6  bg-white rounded-xl  ">
      <h1 className="text-2xl font-bold text-center"></h1>
      <CountryDropdown
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
      <PhoneInput
        country={selectedCountry.code}
        value={phone}
        onChange={setPhone}
        placeholder='Enter your contact number'
        inputClass="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full sm:text-lg border rounded-md px-18 py-6 "
     
      />
    </div>
  );
};

export default PhoneInputComponent;
