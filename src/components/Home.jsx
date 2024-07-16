import React from "react";
import PhoneInputComponent from './PhoneInputComponent';
import '../index'; // Ensure your Tailwind CSS styles are imported
import VideoPlayer from './VideoPlayer';
import CompanyLogos from './CompanyLogos';
import TabsRender from './ButtonSwitcher';
import nature from '../images/nature.webp';
import images from '../images/image-1.jpg'
import Questions from './Questions';
import Footer from './Footer'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  GooglePlayButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";
 


 const Home = () =>{

  const APKUrl =
  "https://play.google.com/store/apps/details?id=host.exp.exponent";
const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";


  return(
    <>
    <div className=" flex flex-col w-screen h-screen scroll-smooth animate-jump-in animate-once animate-delay-700">
      <div className="absolute top-[20%] left-[23%] ">
    <div className="absolute top-[2%] left-[38%] ">
    <p class="text-xl text-center text-blue-500">World’s #1st AI Recruiter</p>
    </div>

    <div className="font-custom">
      <h1>
      <p class="text-8xl text-center text-black">Close your hiring<br></br>in less than <span className="text-blue-600">24 Hours</span></p></h1>
    </div>

    <div className="font-custom ">
      <h5>
      <p class="text-center text-neutral-400">An AI powered recruiting platform that sources, shortlists, interviews and evaluates potential<br></br> candidates specific to your hiring needs - in just a day!</p></h5>
    </div>
    <div className="flex justify-center space-y-4 space-x--4">
    <div className=" min-h-screen bg-gray-100 ">
      <PhoneInputComponent />
    </div>
    <div className="">
      
      <button className="inline-block bg-blue-600 border-blue-600 text-white px-16 py-5 rounded-lg cursor-pointer font-custom">Start Hiring</button>
    </div>
    </div>
    </div>
    
      <div className=" transition duration-700 hover:-translate-y-10 hover:scale-110 absolute top-[99%] left-[-2%] mb-20">
      <div className="  min-h-screen bg-gray-100 ">
    
      <VideoPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  width="1300px" height="650px" />
    </div>
      </div>
    <div  className=" absolute top-[136%] left-[6%]">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      <h1 className="text-2xl font-bold text-center mb-4"></h1>
      <CompanyLogos />
    </div>
    </div>
    <div className="relative  absolute top-[200%] left-[0%] font-custom">
    <h1>
    <p class=" text-6xl text-center text-black">Why companies across India are choosing<br></br> <span className="text-blue-600">GoodSpace</span></p></h1>
    </div>

    <div>

   <div className="relative  absolute top-[200%] left-[%] font-custom">
   <div className="min-h-screen  flex items-center justify-center ">
      <TabsRender />
    </div>
</div>

    </div>
   
<div className="relative  absolute top-[200%] left-[%] ">
                <div className="flex flex-row space-x-24">
          <div className="basis-1/2 ">
      <Card className="mt-6 w-[100%] h-[40%] bg-zinc-400">
      <CardHeader  className="relative ">
      
      </CardHeader>
      <CardBody>
      <h1>
      <p class=" text-7xl text-center text-black font-custom">Find your next hire <br></br>today</p></h1>
      <div className="flex justify-center space-y-4 space-x--4">
    <div className=" min-h-screen  ">
      <PhoneInputComponent />
    </div>
    <div className="">
      
      <button className="inline-block bg-blue-600 border-blue-600 text-white px-16 py-5 rounded-lg cursor-pointer font-custom">Start Hiring</button>
    </div>
    </div>
      </CardBody>
      
    </Card>
    </div>
   <div className="basis-1/2">
    <Card className="mt-6 w-[100%] h-[40%] flex justify-center ">
      <CardBody>
      <div class="grid grid-cols-2  justify-center font-custom">
  <div className=" row-span-3 mb-10 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110  duration-300">
    <h1><span className="flex justify-center text-7xl text-blue-500">30%</span></h1><br></br>
  <span className="flex justify-center text-sm">Increase in candidate applications per job</span>
  </div>
  <div className="row-span-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110  duration-300">
    <h1><span className="flex justify-center text-7xl text-blue-500">5 hrs+</span></h1><br></br>
  <span className="flex justify-center text-sm">time saved per day per recruiter</span>
  </div>
  <div className=" row-span-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110  duration-300">
    <h1><span className="flex justify-center text-7xl text-blue-500">10X</span></h1><br></br>
  <span className="flex justify-center text-sm">Improved candidate quality per job</span>
  </div>
  <div className=" row-span-3 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110  duration-300 ">
    <h1><span className="flex justify-center text-7xl text-blue-500">1/10th</span></h1><br></br>
  <span className="flex justify-center text-sm">the cost per job per recruiter</span>
  </div>
  </div>
      </CardBody>
    </Card>
    </div>
    </div>
</div>

<div className=" flex flex-col relative  top-[140%] scroll-auto ">

<div className=" bg-fixed overflow-x-scroll  h-[50%] w-92 font-custom" >
  <div className="flex flex-row  justify-center left-[40%] bg-blue-500">
    <div className="flex flex-col justify-center ">
  <h1><span className="text-5xl">Post your job on GoodSpace <br></br> in seconds</span></h1>
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



<div className=" bg-fixed bg-white-500  font-custom " >
  <div className="flex flex-row p-32">
  <h1><span className="text-7xl">Experience the<span className="text-blue-500"> GoodSpace</span><br></br> app on mobile</span></h1> 
  <ButtonsContainer>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style"}
      />
      <AppGalleryButton
        url={iOSUrl}
        theme={"light"}
        className={"custom-style"}
      />
    </ButtonsContainer>

    <div className="flex p-32">
    <img src={images}></img>
  </div>
  </div>
  </div>

<div className=" text-3xl ">
<Questions />
</div>
  
    <div className=" bg-fixed text-3xl bg-blue-700 ">

    <Footer />
    </div>
    </div>
   
      </>
    
  )
}
export default Home;