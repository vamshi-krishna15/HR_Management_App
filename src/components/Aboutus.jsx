import React from "react";
import nature from '../images/nature.webp';
import images from '../images/image-1.jpg';
import DemoLogin from "./DemoLogin";
import Footer from "./Footer";

const Aboutus =() => {

return(

  <>
  <div className=" flex flex-col w-screen h-screen scroll-smooth animate-jump-in animate-once animate-delay-700">
      <div  className="absolute top-[20%] left-[14%] ">
      <div className="font-custom">
        <h1>
        <p class="text-8xl text-center text-black"> <span className="text-blue-600">Akriyan </span>is where the<br></br> world of business meets AI</p></h1>
      </div>

      <div className="font-custom ">
        <h5>
        <p class="text-center text-neutral-400">Leveraging AI to revolutionalize business operations, making processes 10X efficient than<br></br> traditional methods of talent acquisition, sales and finance.</p></h5>
      </div>
    </div>
    </div>

   <div className=" flex flex-col relative scroll-auto top-24">

  <div className=" bg-fixed overflow-x-scroll  h-[50%] w-92 font-custom" >
  <div className="flex flex-row  justify-center left-[40%] bg-blue-500">
    <div className="flex flex-col justify-center ">
  <h1><span className="text-5xl">Post your job on Akriyan  <br></br> in seconds</span></h1>
  <p className="text-xl">We prioritize your hiring requirements over everything else. You define what you need and we deliver!</p>
  </div>
    <div className="flex p-32 h-96">
    <img src={images}></img>
  </div>
  </div>                                        
  

  
<div className=" bg-srcoll  bg-white-800 h-[50%] w-92" >
  <div className="flex flex-row p-32">
    <img src={nature}></img>
    <div className="flex flex-col p-20 ">
    <h1><span className="text-5xl">Get shortlisted candidates <br></br> within a day</span></h1>
    <p className="text-xl">You sit back and relax while we source and shortlist high quality potential candidates for you!</p>
  </div>
  </div>

</div>

<div className=" bg-local bg-blue-500 h-[50%] w-92 " >
  <div className="flex flex-row p-32 h-96">
    <img src={images}></img>
    <div className="flex flex-col p-32 justify-center left-[50%]">
    <h1><span className="text-5xl ">And interviewed candidates <br></br>the same day</span></h1>
    <p className="text-xl">Shortlisted candidates are great, but interviewed candidates are better. These are your perfect match!</p>
  </div>
  </div>

</div>

<div className=" bg-fixed bg-white-500 h-[50%] w-92  " >
  <div className="flex flex-row p-20">
    <img src={nature}></img>
    <div className="flex flex-col p-32">
    <h1><span className="text-5xl">You are all set to find <br></br> your next hire</span></h1>
    <p className="text-xl">You get top candidates faster than ever. You hire them faster than ever. No delayed hiring for you, ever again!</p>
  </div>
  </div>

    </div>
  </div>
</div>
  
  
  <div className="flex absolute flex-col  justify-center w-screen h-screen top-[450%] space-y-2">
  <div className="flex  ">
     <DemoLogin />
  </div>
  
    <div className="flex   text-3xl bg-blue-700 ">
    <Footer />
    </div>
    </div>
  
  </>
);

};
export default Aboutus;