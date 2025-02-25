import React from "react";
import footerImage from "../assests/wallpaper.jpg";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-11/12 h-auto flex flex-col justify-center items-center mx-auto mb-8">
      <div className="w-full object-contain flex border-2 bg-yellow-400">
        <img src={footerImage} alt="" className=" w-full h-48 object-contain" />
      </div>

      <p className="text-center mt-8 font-bold text-3xl">GYM LOVER</p>
      <div className="border-2 border-yellow-400 w-24"></div>

      <div className="flex flex-col md:flex-row justify-around w-full mt-8 px-4  md:text-left">
        <div className="flex flex-col gap-2 mb-4 md:mb-0">
          <p className="cursor-pointer font-semibold hover:border-b-2 w-max hover:border-b-gray-600">GYM LOVER</p>
          <p>Pushing limits and chasing gains, the gym is my playground where strength reigns.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            <FaYoutube />
            <MdEmail />
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-4 md:mb-0">
          <h2 className="cursor-pointer font-semibold hover:border-b-2 w-max hover:border-b-gray-600">Address</h2>
          <div>
            <p><span className="font-bold">Branch 1:</span> C-25, Bittan Market, Bhopal 462016</p>
            <p><span className="font-bold">Branch 2:</span> Dk-4, JK Road, Bhopal 462016</p>
            <p><span className="font-bold">Branch 3:</span> F-56, Kolar, Bhopal 462016</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="cursor-pointer font-semibold hover:border-b-2 w-max hover:border-b-gray-600">Support</h2>
          <div>
            <p>Contact</p>
            <p>Login</p>
            <p>Membership</p>
            <p>My Account</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-9/12 border-2 border-slate-200 mx-auto mt-4"></div>
    </div>
  );
};

export default Footer;
