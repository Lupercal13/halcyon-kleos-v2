import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaMix, FaMixcloud } from "react-icons/fa";

const Music = () => {
  return (
    <div className="">
      <Navbar />

      <div className="h-full w-full flex flex-col justify-center items-center pt-[7rem]">
        <h1 className="text-3xl font-bold mb-8 w-[90%] text-center border-b-2 border-orange-400/60 pb-4 tracking-wider"></h1>
        <div className="w-[75%] sm:w-[50%] h-[300px] flex flex-col gap-4 justify-center items-center  bg-gray-200/30 rounded-lg shadow-lg shadow-orange-600/60">
          <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl">New Releases and Exclusive Tracks</h1>
          <h2 className="text-xl lg:text-3xl">
            available <span className="font-semibold">only</span> at{" "}
            <span className="text-pink-400 text-2xl md:text-3xl lg:text-4xl  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Mixcloud
            </span>
          </h2>
          <a
            href="https://www.mixcloud.com/halcyon_kleos/"
            target="_blank"
            className="w-full"
          >
            <button className="bg-gradient-to-r from-pink-600 to-orange-500 rounded w-[80%] lg:w-[60%] xl:w-[40%] mt-8 h-12 lg:h-16 border-none  mx-auto hover:scale-105 ease-in-out duration-200 flex items-center justify-center gap-4">
              <p className="text-2xl lg:text-4xl font-semibold tracking-wider">Join Now</p>
            </button>
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-8 w-[90%] text-center border-b-2 border-orange-400/60 pb-4 tracking-wider"></h1>
        <div className="flex justify-center items-center h-full w-[75%] lg:max-w-[1400px] lg:h-[600px] mx-auto bg-gradient-to-br from-pink-600/70 to-orange-600/70 rounded-lg py-4">
          <iframe
            width="80%"
            height="500px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1470923098&color=%23e425c6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
        {/* <div className="w-[75%] h-[300px] flex flex-col gap-4 justify-center items-center mt-16  bg-gray-200/30 rounded-lg ">
          <h1 className="text-3xl">New Releases and Exclusive Tracks</h1>
          <h2 className="text-xl">
            available <span className="font-semibold">only</span> action <span className="text-pink-400 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Mixcloud
            </span>
          </h2>
          <a
            href="https://www.mixcloud.com/halcyon_kleos/"
            target="_blank"
            className="w-full"
          >
            <button className="bg-gradient-to-r from-pink-600 to-orange-500 rounded w-[80%] mt-8 h-12 border-none  mx-auto hover:scale-105 ease-in-out duration-200 flex items-center justify-center gap-4">
              <p className="text-2xl font-semibold tracking-wider">Join Now</p>
            </button>
          </a>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Music;
