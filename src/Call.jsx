
'use client'
import React from 'react';


const CallButton = () => {
  // Phone number to call
  const phoneNumber = "+917850820955"; // Replace with the actual phone number

  return (
    <div className="flex  justify-center mt-10">
      <a href={`tel:${phoneNumber}`}>
        <button className="bg-blue-500 text-2xl    py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition">
         <h>
            call now
         </h>

        
        </button>
      </a>
    </div>
  );
};

export default CallButton;
