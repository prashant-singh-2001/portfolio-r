import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Academics from "./components/Academics";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Academics />
      <Certificates />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
