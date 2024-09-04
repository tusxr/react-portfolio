import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
      </div>
      <Contact />
    </>
  );
}

export default App;
