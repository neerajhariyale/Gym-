import React from "react";
import niteshPhoto from "../assests/nitesh.jpg";

const Clients = () => {
  return (
    <div className="border rounded-xl flex flex-col justify-evenly items-center w-11/12 mx-auto mb-8 p-4">
      <p className="text-center mt-8 font-bold text-2xl">HAPPY CLIENT'S</p>
      <div className="w-16 border-2 border-yellow-500 mt-2"></div>

      <div className="flex flex-wrap gap-6 justify-center mt-6 mb-8 w-full">
        <div className="flex flex-col h-72 w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl ">
          <img src={niteshPhoto} alt="" className="h-24 w-24 rounded-full " />
          <p className="text-2xl font-bold ">Nitesh Soni</p>
          <p className="text-center">
            The gym is always clean and well-maintained, which makes my workouts so much more enjoyable.
          </p>
        </div>

        <div className="flex flex-col h-72 w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl ">
          <img
            src="https://influencersearch.in/wp-content/uploads/2024/03/356386349_1442035089956561_7225310221398377165_n.jpg"
            alt=""
            className="h-24 w-24 rounded-full "
          />
          <p className="text-2xl font-bold">Rajat Dalal</p>
          <p className="text-center">
            I love the variety of classes you offer! They keep my workouts interesting and challenging.
          </p>
        </div>

        <div className="flex flex-col h-72 w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer transition-shadow duration-100 hover:shadow-2xl ">
          <img
            src="https://assets.vogue.in/photos/62e20e0c28ff7a2f63a0a4af/2:3/w_1920,c_limit/Namrata%20Purohit%202.jpg"
            alt=""
            className="h-24 w-24 rounded-full "
          />
          <p className="text-2xl font-bold">Namrata Purohit</p>
          <p className="text-center">
            It would be great to have more stretching areas or additional foam rollers available.
          </p>
        </div>

        <div className="flex flex-col h-72 w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer transition-shadow duration-100 hover:shadow-2xl">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczO33D2Xw5MYRsO_httaZ3d5JSMO1iCRP9neaOH7DyWucZFCSStgpxurGume9sHFJy7G4rpKX5PQ2NqY9aGMYz9QtwsNtcsagzgBBrgjUptD5pjw5Mv8qKwXsNdEI1vnB9AOl86O_9WrAsxSj_ZUkdy-=w720-h714-s-no-gm?authuser=0"
            alt=""
            className="h-24 w-24 rounded-full object-cover "
          />
          <p className="text-2xl font-bold">Harsh Sahu</p>
          <p className="text-center">
            The recent workshop on nutrition was fantastic! More events like that would be really beneficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
