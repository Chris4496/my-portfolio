import React from "react";
import { animated, useSpring } from "react-spring";

function About() {
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
          className="text-[#E01A4F] text-8xl font-bold"
        >
          About Me
        </animated.div>
        <p className="text-gray-300 p-5 text-xl">
          Hi, I'm Chris Kwok! I'm a student developer based in Hong Kong with a
          passion for web development and machine learning. I'm currently
          studying in high school and I hope to pursue a career in software
          engineering in the future.
        </p>
        <p className="text-gray-300 p-5 text-xl">
          When I was 11, I started learning how to code and I've been hooked
          ever since. I've been working on various projects, from websites to
          machine learning models, and I'm always looking for new opportunities
          to learn and grow.
        </p>
        <h1 className="text-[#E01A4F] text-4xl font-bold mt-12">Skills</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Web Development
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              I have experience with HTML and Tailwind CSS. I'm also familiar
              with React and Svelte. I can also use FastAPI and Django to create
              REST APIs.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-gray-100 text-3xl font-bold my-10 scale-x-110">
              Machine Learning/AI
            </h1>
            <p className="text-gray-300 p-5 text-xl">
              I know a little bit about machine learning and I'm currently
              learning how to use TensorFlow. I've taken courses in intro
              machine learning.
            </p>
          </div>
        </div>
        <h1 className="text-[#E01A4F] text-4xl font-bold mt-12">Hobbies</h1>
          <p className="text-gray-300 p-5 text-xl">
            I like playing badminton, working out, and playing video games! (My favorite game is Team Fortress 2)
          </p>
      </div>
    </div>
  );
}

export default About;
