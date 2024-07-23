import React from "react";
import PhoneInputComponent from "./PhoneInputComponent";
import Footer from "./Footer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const Ourteam =() => {

return(

  <>
  <div className=" flex flex-col w-screen h-screen scroll-smooth animate-jump-in animate-once animate-delay-700">
      <div  className="absolute top-[20%] left-[19%] ">
      <div className="font-custom">
        <h1>
        <p class="text-8xl text-center text-black"> <span className="text-blue-600">Akriyan</span> is a way to hire<br></br> smarter, together!</p></h1>
      </div>

      <div className="font-custom ">
        <h5>
        <p class="text-center text-neutral-400 text-lg">We are an AI powered recruiting platform that sources, shortlists, interviews and evaluates<br></br> potential candidates specific to your hiring needs - in just a day!</p></h5>
      </div>
    </div>
</div>

    <div className="font-custom flex flex-col text-center mb-24">
      <h1 className="text-indigo-900">Our Advisory Board</h1>
      <h4>The strategic insights of our advisory board amplify our capabilities by 10X.</h4>
     </div>

  <div className="flex flex-row justify-center space-x-32 ">
    <div className="text-center">
      <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="mx-auto mb-4 w-92 rounded-lg "
          alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
      <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
    </div>

    <div className="text-center">
      <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="mx-auto mb-4 w-92 rounded-lg"
          alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
      <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
    </div>

    <div className="text-center">
      <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="mx-auto mb-4 w-92 rounded-lg"
          alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
      <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
    </div>

    </div>

    <div className="font-custom flex flex-col text-center mb-24 mt-32">
      <h1 className="text-indigo-900">Our Executive team</h1>
      <h4>Leading Akriyan to newer heights with their experience, guidance, innovation and passion.</h4>
     </div>


    <div className="flex flex-row space-x-12 justify-center ml-36 ">

    <div className="flex  ">
    <Card className="w-[70%] max-w-[48rem] flex-col ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none ml-32"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal ">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
    </div>
     <div>
     <Card className="w-[70%] max-w-[52rem] flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none ml-32"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

     </div>

     <div>
     <Card className="w-[70%] max-w-[48rem] flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none ml-32"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
     </div>
    </div>

    <div>

<div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
          suspendisse.
        </p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6">
              <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>









    <div className="relative  absolute top-[200%] left-[%] mt-32 mb-32">
                <div className="flex flex-row space-x-24 ">
          <div className="basis-1/2 h-[60%]">
      <Card className="mt-6 w-[100%] h-[40%] bg-zinc-400">
      <CardHeader  className="relative ">
      
      </CardHeader>
      <CardBody>
      <h1>
      <p class=" text-7xl text-center text-black font-custom">Find your next hire <br></br>today</p></h1>
      <div className="flex justify-center space-y-4 space-x--4">
    <div className="  ">
      <PhoneInputComponent />
    </div>
    <div className="">
      
      <button className="inline-block bg-blue-600 border-blue-600 text-white px-16 py-5 rounded-lg cursor-pointer font-custom">Start Hiring</button>
    </div>
    </div>
      </CardBody>
      
    </Card>
    </div>
   <div className="basis-1/2 h-[60%]">
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
  

    <div className=" text-3xl bg-blue-700 ">

    <Footer />
    </div>
  </>
);

};
export default Ourteam;