import React from 'react';

const OurClasses = () => {
  return (
    <div className='mt-5 w-11/12 border rounded-xl mx-auto flex flex-col items-center justify-evenly mb-6 p-4'>
      <div className='text-center'>
        <p className='mt-8 font-bold text-2xl'>OUR CLASSES</p>
        <div className='w-16 border-2 border-yellow-500 mx-auto'></div>
        <p className='mt-4 font-bold text-xl mb-6'>WHAT WE CAN OFFER</p>
      </div>

      <div className='w-full flex flex-wrap justify-center gap-6 '>
        {[  
          { name: 'Cardio', img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { name: 'Boxing', img: 'https://images.pexels.com/photos/1544774/pexels-photo-1544774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { name: 'Zumba', img: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          { name: 'Body Lifting', img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
        ].map((item, index) => (
          <div key={index} className='flex flex-col gap-4 border shadow-lg rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 w-52'>
            <img src={item.img} alt={item.name} className='h-64 w-full object-cover p-2 rounded-t-lg' />
            <p className='font-bold mb-2 text-center'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClasses;
