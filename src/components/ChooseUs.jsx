import React from 'react'
import juice from '../assests/smoothies.png'
import heart from '../assests/dumbbell.png'
import dumbbell from '../assests/sport.png'
import gym from '../assests/gym.png'

const ChooseUs = () => {
  return (
    <div className='mt-5 w-11/12 h-contain border rounded-xl mx-auto flex flex-col items-center justify-evenly'>

      <div className='flex flex-col items-center'>
        <p className="text-center mt-8 font-bold text-2xl">WHY CHOOSE US ?</p>
        <div className="w-16 border-2 border-yellow-500 mt-2"></div>
        <p className="text-center mt-4 font-bold text-xl mb-10">PUSH YOUR LIMIT FORWARD</p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 w-full lg:flex-row'>

        <div className='flex flex-col justify-center items-center border-2 hover:shadow-2xl h-96 sm:w-72 w-9/12 p-4 gap-2 rounded-lg'>
            <div className='h-24 w-24 rounded-full flex justify-center items-center p-4 border border-black hover:bg-yellow-400'>
                <img src={gym} alt="" className='h-20 w-20 object-contain'/>
            </div>
            <p className='font-bold text-center'>Modern equipment</p>
            <p className='p-2 text-center'>Modern gym equipment includes smart cardio machines with interactive screens and multifunctional strength training workouts.</p>
        </div>

        <div className='flex flex-col justify-center items-center border-2 hover:shadow-2xl h-96 sm:w-72 w-9/12 p-4 gap-2 rounded-lg'>
            <div className='h-24 w-24 rounded-full flex justify-center items-center p-4 border border-black hover:bg-yellow-400'>
                <img src={juice} alt="" className='h-20 w-20 object-contain'/>
            </div>
            <p className='font-bold text-center'>Healthy nutrition plan</p>
            <p className='p-2 text-center'>A healthy nutrition plan includes balanced meals with lean proteins, whole grains, healthy fats, and plenty of fruits and vegetables.</p>
        </div>

        <div className='flex flex-col justify-center items-center border-2 hover:shadow-2xl h-96 sm:w-72 w-9/12 p-4 gap-2 rounded-lg'>
            <div className='h-24 w-24 rounded-full flex justify-center items-center p-4 border border-black hover:bg-yellow-400'>
                <img src={dumbbell} alt="" className='h-20 w-20 object-contain'/>
            </div>
            <p className='font-bold text-center'>Professional training plan</p>
            <p className='p-2 text-center'>A professional training plan incorporates periodized workouts combining strength, endurance, and flexibility, tailored to specific goals.</p>
        </div>

        <div className='flex flex-col justify-center items-center border-2 hover:shadow-2xl h-96 sm:w-72 w-9/12 p-4 gap-2 rounded-lg'>
            <div className='h-24 w-24 rounded-full flex justify-center items-center p-4 border border-black hover:bg-yellow-400'>
                <img src={heart} alt="" className='h-20 w-20 object-contain'/>
            </div>
            <p className='font-bold text-center'>Unique to your needs</p>
            <p className='p-2 text-center'>Our gym offers personalized fitness programs and state-of-the-art equipment tailored to meet your unique health and wellness goals.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs
