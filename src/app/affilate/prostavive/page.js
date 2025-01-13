
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='  '>

        <div className=' flex justify-center items-center'>
            <span className='  font-bold text-[#0ea5e9] sm:text-[31px]   md:text-[44px]'>
                Prosta
            </span>
            
            <h2 className=' sm:text-[31px]  font-bold md:text-[44px]'>
            Vive
            </h2>
        </div>
        <div className=' bg-blue-900'>
<h1 className=' font-bold text-center sm:mx-2  text-white md:mx-36 sm:text-[31px] md:text-[55px]'>
<span className=' sm:text-[31px]  font-bold text-blue-400 md:text-[55px]'>
ProstaVive:
    </span>
    
    The Most Potent, Fast-Acting Formula for Prostate Health & Strong Flow
</h1>
        </div>
        <div className="   my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
       
       <img className=" w-[68vw]  md:h-[48vh]   sm:w-[90vw] sm:h-[45vh]    " src="/prosta.png" alt="My Image" />
       
       
       </div>

       <div className='  flex justify-center  items-center'>
        <button className=' px-3 rounded-md shadow-lg bg-orange-500 '>
            <Link className=' text-white sm:text-2xl md:text-[55px]' href={''}>Shop now </Link>
        </button>
       </div>

       <div className=' sm:mx-3 md:mx-5 grid md:grid-cols-2 sm:grid-cols-1'>
       <div>
        <p className=' md:text-2xl'>
        Thousands of men of all ages are supporting healthy, youthful prostates along with strong urine flow, an active sex life and deep, satisfying sleep every night…
        </p>
        <br/>
        <p className=' md:text-2xl'>
        All thanks to a simple, powerful blend of prostate-boosting nutrients.
        </p><br/>
        <p className=' md:text-2xl'>
        These specific, unique nutrients are supporting the activity of the prostate, metabolizing cells, maintaining healthy blood flow, and helping support a healthy prostate size…
        </p>
        </div>
        <div>
        <div className="   my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
       
       <img className=" w-[68vw]  md:h-[48vh]   sm:w-[90vw] sm:h-[45vh]    " src="/prosta2.png" alt="My Image" />
       
       
       </div>
       <div className='  flex justify-center  items-center'>
        <button className='    animate-bounce px-3 rounded-md shadow-lg bg-orange-500 '>
            <Link className=' text-white sm:text-2xl md:text-[55px]' href={''}>Add to cart </Link>
        </button>
       </div>
       </div>
       </div>

       <div className=' md:mx-10'>
        <h2 className='  md:text-[55px] text-center  font-bold'>
        <span className=' text-[#0ea5e9] md:text-[55px] text-center  font-bold'>
        ProstaVive:</span> Is A Powerful New Formula For Boosting Prostate Health Fast
        </h2>
       </div>


<div className=' sm:mx-3 md:mx-10'>
    <p className=' md:text-2xl'  >
    It’s different to every other solution out there, because it helps support prostate blood circulation, which, as shown in a new 2023 study by Fukushima Medical University in Japan, may be helpful to metabolizing cells around the prostate.
    </p> <br/>
    <p  className=' md:text-2xl' >
    Stromal cell proliferation is the buildup of cells around the outer edges of the prostate…
</p> <br/>
<p  className=' md:text-2xl' >
And the Japanese researchers showed, metabolizing the cells can be helped by supporting healthy blood flow in and around the prostate…
</p> <br/>
<p  className=' md:text-2xl' >
This, in turn, can help with urine flow as well as maintaining bladder healthy...
</p> <br/>
<p  className=' md:text-2xl' >

</p> <br/> className=' md:text-2xl'
<p  className=' md:text-2xl' >
When a man's prostate is healthy, it tends to also improve his sleep, love life, confidence and relationships…


</p> <br/>
<p className=' md:text-2xl'  >
Thanks to the powerful nutrients in ProstaVive, you can boost your prostate’s performance by optimizing its internal cellular activity and blood flow, helping you enjoy powerful, youthful flow and increased sexual activity…
</p> <br/>
</div>


       <div className="   my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
       
       <img className=" w-[48vw]  md:h-[48vh]   sm:w-[90vw] sm:h-[45vh]    " src="/prosta2.png" alt="My Image" />
       
       
       </div>

       
    </div>
  )
}

export default page