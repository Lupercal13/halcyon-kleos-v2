import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const News = () => {
  const [isLoading, setIsLoading] = useState(false);

  // const fetchData =() => {
  //   setIsLoading(true)
  //   window.onload(setIsLoading(false))
  //   }
  // }
  const fetchData = () => {
    setIsLoading(true);

    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full  h-full flex flex-col justify-center items-center pt-[7rem] ">
        <div className="h-full w-[85%] lg:max-w-[800px] bg-gradient-to-br from-pink-600/70 to-orange-600/70 flex flex-col justify-center items-center rounded-2xl pb-8 shadow-lg shadow-white/50">
          <h1 className="text-3xl lg:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pb-4 font-semibold">Latest News</h1>
          {isLoading ? (
            <ClipLoader color="{'#fff'}" />
          ) : (
            <div className="w-[90%]">
              <a
                className="twitter-timeline "
                href="https://twitter.com/HalcyonKleos?ref_src=twsrc%5Etfw"
                data-tweet-limit="5"
              ></a>
              <Helmet>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </Helmet>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
