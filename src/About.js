import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EventCard from './Home/component/EventCard';
import NavbarPage from './Home/navbar/navbar';

const Create = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>
     <NavbarPage></NavbarPage>

   
      <div class="flex flex-col items-center space-y-2 mt-24">
        <div className='p-28 pb-28'>
        <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl pb-4">We're on a mission to make the web beautiful</h1>
      <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        At Acme Inc, we believe in the power of the web. We're dedicated to creating tools and resources that
        empower developers to build amazing experiences for the world.
      </p>
        </div>
      <div className='p-28 pb-28'>
      <h2 class="text-2xl font-bold tracking-tighter sm:text-3xl">Our Values</h2>
        <p class="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We're committed to openness, inclusivity, and innovation. Our team is always looking for new ways to push
          the boundaries of what's possible on the web, and we're dedicated to sharing our knowledge and expertise
          with the community.
        </p>
      </div>
       <div className='p-28 pb-28'>
       <h2 class="text-2xl font-bold tracking-tighter sm:text-3xl">Our History</h2>
        <p class="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Acme Inc was founded in 2015 by a group of passionate developers who wanted to make it easier for their
          peers to create beautiful and functional websites. Since then, we've grown into a global team of experts,
          and our mission remains the same: to provide the tools and resources that developers need to succeed.
        </p>
       </div>
        </div>
        
      
  
  
   </>
  );
};

export default Create;
