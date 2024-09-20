import React from 'react';

// List of company logos and names
const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  // Add more companies as needed
];

const CompanyLogos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <div className="flex animate-scroll space-x-2">
        {companies.map((company, index) => (
          <div key={index} className="flex-shrink-3 mx-96">
            <img src={company.logo} alt={company.name} className="h-8 w-44" />
            <p className="text-center mt-2">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );



  // return (
  //   <div className="bg-white py-24 sm:py-32">
  //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //       <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
  //         Trusted by the world’s most innovative teams
  //       </h2>
  //       <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
  //         <img
  //           alt="Transistor"
  //           src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
  //           width={158}
  //           height={48}
  //           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
  //         />
  //         <img
  //           alt="Reform"
  //           src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
  //           width={158}
  //           height={48}
  //           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
  //         />
  //         <img
  //           alt="Tuple"
  //           src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
  //           width={158}
  //           height={48}
  //           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
  //         />
  //         <img
  //           alt="SavvyCal"
  //           src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
  //           width={158}
  //           height={48}
  //           className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
  //         />
  //         <img
  //           alt="Statamic"
  //           src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
  //           width={158}
  //           height={48}
  //           className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // )
};

export default CompanyLogos;
