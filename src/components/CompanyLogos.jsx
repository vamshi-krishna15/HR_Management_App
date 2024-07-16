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
};

export default CompanyLogos;
