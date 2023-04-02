import React from 'react';

const PrimaryButton = ({children}) => {
  return (
    
      <button className="px-8 py-2 rounded-md bg-primary text-white font-semibold">{children}</button>
   
  );
};

export default PrimaryButton;