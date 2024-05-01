import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
