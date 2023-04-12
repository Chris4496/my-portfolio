import React from "react";
import Signature from "./Signature";
import Menu from "./Menu";


function Home() {
  return (
    <div className="bg-[#0C090D] h-full min-h-screen p-10 md:p-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center">
          <h1 className="text-gray-100 text-8xl md:text-9xl font-bold font-sans subpixel-antialiased tracking-wide text-center scale-y-125 mt-36">HELLO!</h1>
          <h1 className="text-gray-100 text-6xl font-bold my-10 scale-x-110">This is</h1>
          <Signature />
        </div>
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Home;
