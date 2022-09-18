import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ProjectMind from './components/ProjectMind'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <ProjectMind />
      <Testimonials />
    </div>
  );
}

export default App;
