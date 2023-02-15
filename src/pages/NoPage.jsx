import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <div className="flex flex-col h-screen sm:grid sm:grid-cols-2 items-center justify-center gap-2">
        <div className="flex justify-center sm:justify-end  w-full">
          <h1 className="text-9xl font-audiowide sm:border-r-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            404
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="font-audiowide">oops...</p>
          <p className="font-audiowide mb-10">
            The page you are looking for is missing.
          </p>
          <Link to='/'><p className="  hover:shadow-md hover:shadow-orange-500 hover:scale-105 ease-in-out duration-50 hover:cursor-pointer border px-2 py-1">Take me back</p></Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
