import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import FreelanceWorks from "./components/Freelance";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Hero />
        <Skills />
{/*         <Portfolio /> */}
        <FreelanceWorks/>
        <Experience />
        
      </div>
      <Contact />
    </>
  );
}

export default App;
