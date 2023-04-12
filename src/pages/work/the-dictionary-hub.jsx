import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animated, useSpring } from "react-spring";

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
          The Dictionary Hub
        </animated.div>
        <p className="text-gray-300 p-5 text-xl">
          The Dictionary Hub is a web application that allows users to search
          for words and their definitions. This app will compile definations
          from multiple sources and display them in a single page. Synonyms and
          antonyms will also be displayed.
        </p>
        <div class="flex-grow border-t border-gray-400"></div>
        <div className="flex flex-wrap my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Extensive Search
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              The Dictionary Hub allows users to search for words and their
              definitions. Results from Cambridge Dictionary, Oxford Dictionary
              and Merriam-Webster Dictionary are displayed. This includes the
              word's part of speech, pronunciation, definition and examples.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/the-dictionary-hub-0.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-wrap-reverse my-8">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <img
              src="/the-dictionary-hub-1.png"
              alt="my-image"
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Synonyms and Antonyms
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              When a user searches for a word, the app will also display
              synonyms and antonyms of the word. This will allow users to find
              words that are similar to the word they searched for.
            </p>
          </div>
        </div>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Technologies Used
        </h1>
        <p className="text-gray-300 p-5 text-xl">
          The Dictionary Hub was built using React, Charkra UI and various React
          libraries. The app uses a custom API to fetch data from multiple
          sources.
        </p>
        <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
          Link to the project:{" "}
        </h1>

        <a
          href="https://dictionary.chriskwok.dev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          dictionary.chriskwok.dev
        </a>
      </div>
    </div>
  );
}

export default TheDictionaryHub;
