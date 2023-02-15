import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/halcyon-kleos-logo-bg.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="pt-[6rem] grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:gap-4 ">
          <div className="">
            <img
              src={logo}
              alt="/"
              className="h-[500px] lg:h-[500px] mx-auto lg:mx-0 mb-8"
            />
          </div>
          <div className="bg-pink-500/50 mx-4 lg:mx-0 lg:mr-16 h-full lg:h-[300px] lg:my-auto py-4 rounded-2xl max-w-[500px] lg:max-w-[800px] flex lg:items-center shadow-lg shadow-orange-400/60">
            <p className="text-sm md:text-lg  tracking-widest md:tracking-wide mx-4 font-semibold lg:font-normal  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              British DJ/Producer specializing in organ house music. I have been
              interested in the this particular style since the release of
              'Robin S - Show Me Love' and 'Nightcrawlers - Push The Feeling On'
              from back in the 90's. The 'Organ' has continued it's progression
              throughout the years becoming one of the most distinctive and
              loved sounds in dance music history. It has found it's way into
              many genres and continues to transition through current mainstream
              and underground music.
            </p>
          </div>
          <div className="pt-4">
            <p>
              Exclusive mixes only on
              <a
                href="https://soundcloud.com/halcyonkleos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-pink-500 text-lg hover:text-orange-500 hover:cursor-pointer">
                  {" "}
                  SoundCloud{" "}
                </span>
              </a>
              or{" "}
              <a
                href="https://www.mixcloud.com/halcyon_kleos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-pink-500 text-lg hover:text-orange-500 hover:cursor-pointer">
                  Mixcloud
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
