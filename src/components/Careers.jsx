import React from "react";
import Footer from "./Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button
} from "@material-tailwind/react";


const Careers =() => {

return(

  <>
  
  <div className=" flex flex-col w-screen h-screen scroll-smooth animate-jump-in animate-once animate-delay-700">
      <div  className="absolute top-[20%] left-[15%] ">
    <div className="absolute top-[2%] left-[44%] ">
    <p class="text-2xl text-center text-blue-500">#careers</p>
    </div>

      <div className="font-custom">
        <h1>
        <p class="text-8xl text-center text-black">We like you<span className="text-blue-600">      alreadys</span></p></h1>
      </div>

      <div className="font-custom ">
        <h5>
        <p class="text-center text-neutral-400 text-xl">Are you passionate about making a difference? At our core, we're always on the lookout for exceptional individuals to join our<br></br> team. If you're driven, creative, and ready to contribute to a dynamic environment, we'd love to hear from you.</p></h5>
      </div>
  </div>
    
</div>


<div className="flex justify-center ">
     <button
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  class="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong cursor-pointer">
  See Open Roles
</button>
     </div>

     <div className="flex justify-center mt-28 mb-12 font-custom text-xl">
     <h1>Our Values</h1>
     </div>

    <div className="flex flex-row ml-32 space-x-8">

    <div>
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
   </div>

   <div>

    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
  </div>

     <div>
  
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </Card>
   </div>

   <div>
      
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>  
     </Card>
    </div>
  </div>

   <div className="flex justify-center mt-32 font-custom">
   <h1 className="">Open Roles</h1>
   </div>


    <div className="flex flex-row ml-60">
    <Card className="mt-6 w-full h-56 flex-row space-x-[50%]">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Digital Marketing Specialist
        </Typography>
        <Typography>
         
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mt-12">
        <Button className="bg-blue-600 w-44 h-16 text-lg">Quik Apply</Button>
      </CardFooter>
    </Card>
    </div>

    <div className=" text-3xl bg-blue-700 ">

     <Footer />
     </div>


  </>
);

};
export default Careers;