import React from 'react';

const Trainer = () => {
  return (
    <div className="border rounded-xl flex flex-col items-center w-11/12 mx-auto mb-8 p-6">
      <p className="text-center mt-4 font-bold text-2xl sm:text-3xl">EXPERT TRAINER</p>
      <div className="w-16 border-2 border-yellow-500 mt-2"></div>

      {/* Trainer Cards */}
      <div className="mt-6 w-10/12 m-auto flex flex-wrap justify-center gap-6">
        {/* Trainer 1 */}
        <div className="flex flex-col flex-wrap h-72 w-9/12 sm:w-64 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl transition duration-300">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMmVV5PfFzpv367grCArhQyRDiVzeE5ZmdNDe0Y3UNbcSh5uBTwIEZ6AjjU3jD6qni-nE-O24fqODhW9l3GetWMwLZVEIiu271Peq_qQRhNyA5KQtU85A1Rrs0uj1lXlkezg3fKnU7j0HnpmqFM4Fg=w716-h740-s-no-gm?authuser=0" 
            alt="Prateek V." 
            className="h-24 w-24 rounded-full object-cover" 
          />
          <p className="text-lg sm:text-xl font-bold">Prateek V.</p>
          <p className="text-center text-sm sm:text-base px-2">
            Every rep brings you one step closer to your goal. Keep pushing!
          </p>
        </div>

        {/* Trainer 2 */}
        <div className="flex flex-col h-72 w-9/12 sm:w-64 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl transition duration-300">
          <img 
            src="https://assets.zeezest.com/images/PROD_Anupriya_0002_%20_1646993975930.jpg?w=1920&q=75" 
            alt="Anupriya Kapur" 
            className="h-24 w-24 rounded-full object-cover" 
          />
          <p className="text-lg sm:text-xl font-bold">Anupriya Kapur</p>
          <p className="text-center text-sm sm:text-base px-2">
            Push yourself, because no one else is going to do it for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
