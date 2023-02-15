import React from "react";
import background from "../assets/bg-palm-sunset.jpg";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaSoundcloud, FaTwitterSquare, FaMixcloud } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <img
          src={background}
          alt="/"
          className="w-full h-screen object-cover"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-shalimar font-bold text-8xl lg:text-[10rem] sm:text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
              Halcyon Kleos
            </h1>
            <div className="w-full flex justify-end  text-xs sm:text-base -mt-4 md:max-w-[500px] sm:max-w-[500px] max-w-[350px]">
              <h2 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold flex  justify-end ">
                Dj/Producer of Organ House Music
              </h2>
            </div>
            <div className="flex gap-6 mt-8 sm:gap-16 sm:max-w-[600px]">
              <a
                href="https://www.facebook.com/halcyonkleos1/"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <BsFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/halcyon_kleos/"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <BsInstagram size={30} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1aC8N6gGrAtNrvrBE4dAsw?app=desktop"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <BsYoutube size={30} />
              </a>
              <a
                href="https://soundcloud.com/halcyonkleos"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <FaSoundcloud size={30} />
              </a>
              <a
                href="https://twitter.com/HalcyonKleos"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <FaTwitterSquare size={30} />
              </a>
              <a
                href="https://www.mixcloud.com/halcyon_kleos/"
                target="_blank"
                className="hover:scale-105 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                <FaMixcloud size={30} />
              </a>
            </div>
            <div className="w-full flex items-center justify-center my-16">
              <Link
                to="/music"
                className="w-full flex justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {" "}
                <button className="bg-orange-600 w-[50%] text-2xl rounded-full hover:scale-105 ease-in-out duration-200">
                  <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Listen Now
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div id="home" className="h-screen w-full  " style={{backgroundImage: 'url(/bg-palm-sunset.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'cover',}}>
    <div className="bg-black/50 h-screen w-full top-0 left-0  "></div>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="font-shalimar text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Halycon Kleos</h1>
        </div> */}

        {/* <img
        src={background}
        alt="/"
        className="w-full  h-screen  object-cover blur-[0.75px]"
      />
      <div className="w-full h-full md:h-[550px] absolute top-0 left-0 bg-black/30">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="font-shalimar text-[7rem] md:text-[10rem] font-bold text-gray-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
            Halcyon Kleos
          </h1>
          <div className="flex gap-8 flex-wrap text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            <a href="https://www.facebook.com/halcyonkleos1/" target="_blank">
              <BsFacebook
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105 "
              />
            </a>
            <a href="https://www.instagram.com/halcyon_kleos/" target="_blank">
              <BsInstagram
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1aC8N6gGrAtNrvrBE4dAsw?app=desktop"
              target="_blank"
            >
              <BsYoutube
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://soundcloud.com/halcyonkleos" target="_blank">
              <FaSoundcloud
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://twitter.com/HalcyonKleos" target="_blank">
              <FaTwitterSquare
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
            <a href="https://www.mixcloud.com/halcyon_kleos/" target="_blank">
              <FaMixcloud
                size={30}
                className="hover:text-pink-300 cursor-pointer hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Home;
