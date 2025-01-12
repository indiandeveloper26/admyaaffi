import React from 'react';

const WhatsAppButton = () => {
  // Phone number for WhatsApp (include the country code without '+' for the API)
  const phoneNumber = "917850820955"; // Replace with your actual WhatsApp number
  const message = "Hello, I need more information."; // Default message that can be sent

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center mt-10">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500  text-2xl  py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition">
         {/* <h1 className=' bg-red-500 '>
          <FaWhatsapp className=' text-green-600'/>
         </h1> */}
         whatsap chat on 
        </button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
