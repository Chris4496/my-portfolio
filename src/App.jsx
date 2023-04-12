import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useTransition, a } from "react-spring";
import About from "./pages/about";
import WorkList from "./pages/workList";
import Contact from "./pages/contact";
import Home from "./pages/home";

import TheDictionaryHub from "./pages/work/the-dictionary-hub";
import VocabExerciseGenerator from "./pages/work/vocab-exercise-generator";
import WorkoutTracker from "./pages/work/workout-tracker";

import NotFound from "./pages/notFound";

import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, marginTop: -25, display: "none" },
    enter: { opacity: 1, marginTop: 0, display: "block"},
    leave: { opacity: 0, marginTop: -25, display: "none" },
  });

  return (
    <>
      <NavBar />
      {transitions((style, item) => (
        <a.div style={style}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work">
              <Route index element={<WorkList />} />
              <Route path="/work/the-dictionary-hub" element={<TheDictionaryHub />} />
              <Route path="/work/vocab-exercise-generator" element={<VocabExerciseGenerator />} />
              <Route path="/work/workout-tracker" element={<WorkoutTracker />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </a.div>
      ))}
    </>
  );
}

export default App;
