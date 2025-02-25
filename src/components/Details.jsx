import React from 'react';
import mainImg from "../assests/main.jpg";
import './Btn.css';

const Details = () => {
  return (
    <div className='border-none'>
      <div className='relative w-full'>
        <img src={mainImg} alt="" className='w-full h-auto' />
        <div className='absolute top-1/4 left-28 md:left-96  transform -translate-x-1/2 text-center p-2'>
          <p className='font-sans tracking-wide lg:text-6xl md:text-lg text-[#bb6d4c] -mb-4 md:mb-4 '>SHAPE YOUR BODY</p>
          <p className='mt-4 font-sans tracking-wide lg:text-6xl md:text-lg  text-[#88736e]'>BE STRONG TRAIN HARD</p>
          <button className='mt-6 font-sans tracking-wide lg:text-6xl md:text-lg text-[#f8dbbc] btn px-6 py-2'>GET INFO</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
