'use client'

import BackgroundImage from "@/bg";
import CallButton from "@/Call";
import Footerr from "@/Foooter";
import WhatsAppButton from "@/Whatsap";
import Link from "next/link";

import React, { useState } from "react";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className=" shadow-lg sm:mx-0 sm:shadow-lg">
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">ADMYA SPEECH AND HEARINF THERAPY</div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-4 text-white">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white space-y-2 p-4">
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#about" className="block hover:text-gray-400">About</a>
          <a href="#services" className="block hover:text-gray-400">Services</a>
          <a href="#contact" className="block hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>


<div className=" ">

  <h1 className="  text-center sm:text-2xl  md:text-[53px]   ">
  Hearing and Speech Therapy Clinic - Your Partner in Communication and Hearing Wellness
  </h1>
</div>



{/* 
<div className=" md:grid md:grid-cols-2 ">
<div className="  my-1  mx-1  flex  justify-center items-center">
<img className=" w-[99%]   h-[55vh] sm:w-[99%] sm:h-[25vh]    " src="/admya.jpg" alt="My Image" />


</div>
<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[99%]   h-[55vh] sm:w-[99%] sm:h-[25vh]    " src="/orginal.jpg" alt="My Image" />


</div>
</div> */}


<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[88vw]  md:h-[68vh]   sm:w-[99vw] sm:h-[30vh]    " src="/newimg.jpg" alt="My Image" />


</div>
<CallButton/>
<WhatsAppButton className=' my-4  mx-10'/>


{/* content */}
<div>
  <h2>
  Introduction
  </h2>
  <p className=" sm:mx-5 text-[22px]">
  Communication is an essential part of life. It forms the foundation of human interaction, helping us express thoughts, emotions, and ideas. But for some, this seemingly effortless ability may come with challenges, whether it's difficulty in speaking, hearing, or both. Fortunately, with advancements in medical science and therapeutic techniques, individuals with speech or hearing impairments can lead more fulfilling lives.

At the Hearing and Speech Therapy Clinic, we provide expert care to individuals who face difficulties in hearing or speaking. Located at:

Gorakhpur Road, above R S Dental Clinic, Tilak Nagar Colony, Durgapuri Colony, Naka Bypass, Ayodhya, Faizabad, Uttar Pradesh 224001,

we specialize in diagnosing and treating various speech, language, and hearing disorders. Our goal is to help people communicate more effectively and improve their quality of life.
  </p>
</div>
{/* content */}

{/* grid */}

<div className=" grid md:grid-cols-3  ">
<div className=" w-[99% ] mx-3 sm:my-14  shadow-lg   h-[58vh]">

<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[99%]   h-[35vh] sm:w-[99%] sm:h-[35vh]    " src="/pho21.jpg" alt="My Image" />


</div>
<h1 className=" text-center text-2xl">
Experienced Specialists:
</h1>
<p>
Our team consists of highly qualified audiologists, speech therapists, and language pathologists who are dedicated to providing the best care</p>
</div>
<div>

<div className=" w-[99% ] sm:my-14  mx-3  shadow-lg   h-[58vh]">

<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[99%]   h-[35vh] sm:w-[99%] sm:h-[28vh]    " src="/pho3.jpg" alt="My Image" />


</div>
<h1 className=" text-center text-2xl">
Personalized Treatment Plans
</h1>
<p>
Every individual is different, which is why we create customized treatment plans based on the patient’s specific diagnosis and needs.</p>
</div>
</div>
<div>

<div className=" w-[99% ] sm:my-14   shadow-lg   h-[58vh]">

<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[99%]   h-[39vh] sm:w-[99%] sm:h-[45vh]    " src="/newimg2.jpg" alt="My Image" />


</div>
<h1 className=" text-center text-2xl">
State-of-the-Art Equipment
</h1>
<p>
We use the latest technology to diagnose and treat hearing and speech disorders, ensuring our patients receive the most effective care possible.
</p>
</div>
</div>

</div>


{/* grid */}
<div className=" md:grid md:grid-cols-2 ">
<div className="  my-1 sm:my-3  mx-1  flex  justify-center items-center">
<div className="  border-2   sm:mt-10   my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[99%] sm:my-4    h-[55vh] sm:w-[99%] sm:h-[45vh]    " src="/orginal.jpg" alt="My Image" />


</div>

</div>
<p className=" text-[18px] sm:mx-4">

Welcome to ADMYA Speech and Hearing Therapy!

At ADMYA Speech and Hearing Therapy, we are dedicated to providing comprehensive therapy services to individuals of all ages. Our clinic focuses on improving speech, language, and hearing abilities to enhance the quality of life for our clients. We understand the importance of communication in daily life and the challenges that speech and hearing disorders can bring.

Our team of skilled professionals offers personalized therapy plans to meet the unique needs of each individual. Whether you or a loved one is dealing with speech delays, hearing loss, stuttering, or other communication disorders, we are here to help. We provide evidence-based therapies that are both effective and tailored to suit every client's specific needs. <br/>
At ADMYA, we believe in a holistic approach that integrates modern technology and traditional techniques. Our clinic is equipped with the latest diagnostic tools to assess and treat speech and hearing disorders accurately. Our therapists work closely with clients to create a positive and supportive environment, ensuring that each session is comfortable and productive.

If you are looking for professional speech and hearing therapy services, we invite you to visit us at ADMYA. Our mission is to empower individuals to communicate confidently and improve their overall well-being. Let us help you take the first step towards better communication and a brighter future.
</p>
</div>







<div>


</div>


<div className=" sm:w-[100vw] w-[80vw]">

<iframe  className=" md:mx-[121px] sm:mx-1 sm:mr-[2px] w-[99%] h-[44vh]"

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.6089501602723!2d82.139848375945!3d26.756852366770293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a093bbd2bc3d3%3A0xee9e6cadf1f16a90!2sAdmya%20speech%20and%20hearing%20clinic!5e0!3m2!1sen!2sin!4v1735566175402!5m2!1sen!2sin"
// 
//  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"


></iframe>
</div>

<Footerr/>

<h1>

</h1>

<Link href={"/affilate/health  "}
        >

          go to afffi 
        </Link>
  </div>
  );
};

export default page;
