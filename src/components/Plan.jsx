import React from "react";
import greenTick from "../assests/greentick.png";

const membershipPlans = [
  { duration: "1-Month Plan", price: "₹699/-", type: "Silver Membership" },
  { duration: "3-Month Plan", price: "₹1499/-", type: "Gold Membership" },
  { duration: "6-Month Plan", price: "₹2999/-", type: "Diamond Membership" },
  { duration: "12-Month Plan", price: "₹4999/-", type: "Platinum Membership" },
];

const Plan = () => {
  return (
    <div className="border rounded-xl flex flex-col items-center w-11/12 mx-auto mb-8">
      <p className="text-center mt-8 font-bold text-2xl">BUY A PLAN</p>
      <div className="w-16 border-2 border-yellow-500 mt-2"></div>

      {/* Responsive Grid for Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 mx-auto mt-8">
        {membershipPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border shadow-lg p-5 justify-center items-center cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <p className="text-lg font-bold">{plan.duration}</p>
            <p className="text-xl font-bold">{plan.price}</p>
            <p className="text-lg font-semibold">{plan.type}</p>

            {/* Plan Features */}
            <div className="flex flex-col gap-2">
              {[
                "Free riding",
                "Unlimited equipments",
                "Personal trainer",
                "Weight losing classes",
                "No time restriction",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={greenTick} alt="" className="h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Subscribe Button */}
            <button className="relative py-2 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-300 shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-95 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-gray-500 before:to-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
