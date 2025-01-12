import React from 'react'

function page() {
  return (
    <div>
<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[100vw]  md:h-[68vh]   sm:w-[100vw] sm:h-[30vh]    " src="/metabolo.PNG" alt="My Image" />


</div>
        






<div className=' md:space-x-3    grid md:grid-cols-3 sm:grid-cols-1'>

    <div>
    <div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[100vw]  md:h-[68vh]   sm:w-[100vw] sm:h-[50vh]    " src="/meta1.PNG" alt="My Image" />


</div>
<div className=' mx-10   rounded-md   bg-yellow-500  flex justify-center items-center'>
    <button className=' border-l md:text-[33px] text-blue-500  text-center'>buy now </button>
</div>
</div>
<div>
<div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[100vw]  md:h-[68vh]   sm:w-[100vw] sm:h-[50vh]    " src="/meta3.PNG" alt="My Image" />


</div>
<div className=' mx-10   rounded-md   bg-yellow-500  flex justify-center items-center'>
    <button className=' border-l md:text-[33px] text-blue-500  text-center'>buy now </button>
</div>
</div>

<div>
    <div className="  my-1  m-0  w-[100%]   mx-1   flex  justify-center items-center">
<img className=" w-[100vw]  md:h-[68vh]   sm:w-[100vw] sm:h-[50vh]    " src="/meta2.PNG" alt="My Image" />


</div>
<div className=' mx-10   rounded-md   bg-yellow-500  flex justify-center items-center'>
    <button className=' border-l md:text-[33px] text-blue-500  text-center'>buy now </button>
</div>
</div>
</div>



<p>
The EcmaScript module format was specified in the package.json that is affecting this source file or by using an special extension, but it looks like that CommonJs syntax is used in the source code.  
Exports made by CommonJs syntax will lead to a runtime error, since the module is in EcmaScript mode. Either change the "type" field in the package.json or replace CommonJs syntax with EcmaScript import/export syntax in the source file.
</p>





    </div>
  )
}

export default page