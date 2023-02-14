import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import logo from "../assets/halcyon-kleos-logo-bg.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="pt-[6rem] grid grid-cols-1">
          <img src={logo} alt="/" className="h-[500px] mx-auto mb-8" />
          <div className="bg-pink-500/50 mx-4 h-[300px] rounded-2xl flex items-center">
            <p className="text-md tracking-wide mx-20 font-semibold leading-7">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
