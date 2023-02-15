import React from "react";
import { BsFacebook, BsInstagram, BsYoutube, BsEnvelope } from "react-icons/bs";
import {
  FaSoundcloud,
  FaTwitterSquare,
  FaMixcloud,

} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="text-gray-400 w-full h-auto px-4 py-10">
      <div className="border-t border-gray-500 pt-2">
        <div className="flex justify-center gap-8 lg:gap-32">
          <a href="https://www.facebook.com/halcyonkleos1/">
            <BsFacebook
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
          <a href="https://www.instagram.com/halcyon_kleos/">
            <BsInstagram
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC1aC8N6gGrAtNrvrBE4dAsw?">
            <BsYoutube
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
          <a href="https://soundcloud.com/halcyonkleos">
            <FaSoundcloud
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
          <a href="https://twitter.com/HalcyonKleos">
            <FaTwitterSquare
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
          <a href="https://www.mixcloud.com/halcyon_kleos/">
            <FaMixcloud
              size={20}
              className="hover:scale-105 hover:text-gray-100"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-lg">Halcyon Kleos</p>
        <a href="mailto:halcyonkleos@gmail.com" className="flex items-center gap-2 -mt-1"><BsEnvelope size={15} /><p  className="text-sm hover:text-gray-100">halcyonkleos@gmail.com</p></a>
        <p className="border-b border-gray-500 w-[200px]"></p>
        <p className="text-xs">&#169; {date} || all rights reserved</p>
        <p className="text-xs">
          Website by: <span className="text-gray-300">PayneDesignHaus</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
