import React from 'react';
import { FcLike } from "react-icons/fc";

const Copyright = () => {
  return (
    <div className='w-11/12 flex justify-center items-center mt-2 mb-4 text-center'>
      <div className='flex flex-wrap justify-center items-center gap-1 text-sm sm:text-base px-2'>
        Copyright ©2024 All rights reserved | This template is made with 
        <span className='flex justify-center items-center'> <FcLike /></span> 
        by <span className='text-red-500 font-semibold'>Neeraj.</span> 
      </div>
    </div>
  );
};

export default Copyright;
