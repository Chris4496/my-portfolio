import React from "react";
import { animated, useSpring } from "react-spring";

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
      <div className="w-full lg:w-3/5 mt-12">
        <animated.div
          style={slideAnimation}
          className="text-[#F9C22E] text-7xl md:text-8xl font-bold"
        >
          Contact Me :D
        </animated.div>
        <p className="text-gray-300 p-5 text-xl">
          If you want to contact me, you can email me at{" "}
          <a
            href="mailto:chrisk.b4496@gmail.com"
            className="text-[#F9C22E] hover:text-[#E01A4F]"
          >chrisk.b4496@gmail.com</a>
          .
        </p>
        <p className="text-gray-300 p-5 text-xl">
          Instagram:{" "}
          <a
            href="https://www.instagram.com/chris_kwok131/"
            target="_blank"
            className="text-[#F9C22E] hover:text-[#E01A4F]"
          >@chris_kwok131</a>
        </p>
        <p className="text-gray-300 p-5 text-xl">
          Discord:{" "}
          <button
            onClick={() => {navigator.clipboard.writeText("chris131#7851")}}
            className="text-[#F9C22E] hover:text-[#E01A4F]"
          >chris131#7851</button>
          <p className="text-gray-300 text-xl">(click to copy)</p>
        </p>
      </div>
    </div>
  );
}

export default WorkList;
