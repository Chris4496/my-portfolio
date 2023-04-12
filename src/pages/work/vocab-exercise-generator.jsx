import React from "react";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useLocation } from "react-router-dom";

function TheDictionaryHub() {
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
          Vocab Exercise Generator
        </animated.div>
        <p className="text-gray-300 p-5 text-xl">
          The Vocab Exercise Generator is a web application that allows users to
          generate vocabulary exercises. Users can choose the vocabulary words
          they want to include in the exercise. The app will then generate exercises based on the
          user's preferences.
        </p>
        <div class="flex-grow border-t border-gray-400"></div>
        <div className="flex flex-wrap my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Custom Vocabulary Exercise
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              Enter the words you want to include in the exercise. The app will then generate the exercise and their respective answers.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/vocab-exercise-generator-0.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-wrap-reverse my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/vocab-exercise-generator-1.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Easy to Use and Convenient
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              You can download the exercise as a PDF file, a text file or a word file. You can also print the exercise.
            </p>
          </div>
        </div>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Technologies Used
        </h1>
        <p className="text-gray-300 p-5 text-xl">
          This app was built using Svelte and Tailwind CSS. It calls a custom API that I made.
        </p>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Link to the project:{" "}
        </h1>

        <a
          href="https://vocabgen.chriskwok.dev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          vocabgen.chriskwok.dev
        </a>
      </div>
    </div>
  );
}

export default TheDictionaryHub;
