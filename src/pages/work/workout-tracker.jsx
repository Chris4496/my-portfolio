import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animated, useSpring } from "react-spring";
function WorkoutTracker() {
  // scroll to top on page load
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const slideAnimation = useSpring({
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 300 },
    delay: 400,
  });

  return (
    <div className="bg-[#0C090D] h-full min-h-screen p-10 md:p-16 flex justify-center">
      <div className="w-full xl:w-3/5 mt-12">
        <animated.div
          style={slideAnimation}
          className="text-gray-100 text-6xl sm:text-8xl font-bold"
        >
          Workout Tracker
        </animated.div>
        <p className="text-gray-300 p-5 text-xl">
          The Workout Tracker is a web application that allows users to track
          their workouts. It makes tracking sets and reps easier and faster.
        </p>
        <div class="flex-grow border-t border-gray-400"></div>
        <div className="flex flex-wrap my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Intuitive Interface
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              The Workout Tracker has a simple and intuitive interface. It is 
              easy to use and navigate. You can add any exercise you want to track.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/workout-tracker-0.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-wrap-reverse my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/workout-tracker-1.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Track Your Progress
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              The Workout Tracker allows you to track your progress. You can see
              how much weight you lifted and how many reps you did. You can also
              see your progress over time thorugh the "History" tab.
            </p>
          </div>
        </div>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Technologies Used
        </h1>
        <p className="text-gray-300 p-5 text-xl">
          The Workout Tracker was built using Svelte and Tailwind CSS. It uses
          local storage to store the data.
        </p>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Link to the project:{" "}
        </h1>

        <a
          href="https://ornate-taffy-4a8ec2.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          https://ornate-taffy-4a8ec2.netlify.app/
        </a>
      </div>
    </div>
  );
}

export default WorkoutTracker;
