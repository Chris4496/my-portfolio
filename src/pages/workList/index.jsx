import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";


function WorkList() {
  const slideAnimation = useSpring({
    from: {
      transform: "translateX(-36%) translateY(15.7%)",
      opacity: 0,
    },
    to: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
    config: { duration: 300 },
    delay: 400,
  });

  return (
    <div className="bg-[#0C090D] h-full min-h-screen p-10 md:p-16 flex justify-center">
      <div className="w-full md:w-2/3 xl:w-2/5 mt-12">
        <animated.div
          style={slideAnimation}
          className="text-[#53B3CB] text-8xl font-bold"
        >
          My Work
        </animated.div>
        <Link to="/work/the-dictionary-hub" class="relative rounded-3xl flex justify-center bg-gray-100 m-10 overflow-hidden group transform transition duration-500 ease-in-out hover:scale-105">
          <img
            src="/dictionary.svg"
            alt="Your Image"
            className="object-cover p-7"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <h1 className="text-gray-100 text-3xl font-bold m-4">
              The Dictionary Hub
            </h1>
          </div>
        </Link>
        <Link to="/work/vocab-exercise-generator"  class="relative rounded-3xl flex justify-center bg-gray-100 m-10 overflow-hidden group transform transition duration-500 ease-in-out hover:scale-105">
          <img
            src="/vocab.png"
            alt="Your Image"
            className="object-cover p-7"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <h1 className="text-gray-100 text-3xl font-bold m-4">
              Vocab Exercise Generator
            </h1>
          </div>
        </Link>
        <Link to="/work/workout-tracker"  class="relative rounded-3xl flex justify-center bg-gray-100 m-10 overflow-hidden group transform transition duration-500 ease-in-out hover:scale-105">
          <img
            src="/workout.svg"
            alt="Your Image"
            className="object-cover p-7"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <h1 className="text-gray-100 text-3xl font-bold m-4">
            Workout Tracker
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WorkList;
