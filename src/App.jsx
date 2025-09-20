// App.jsx
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HeroSection from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";

function App() {
  return (
    <>
      <HeroSection />
      <Projects/>
      <TechStack/>
      <About/>
      <Contact/>
    </>
  )
}

export default App;

