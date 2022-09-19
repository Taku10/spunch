import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ProjectMind from './components/ProjectMind'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Team from './components/Team'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <ProjectMind />
      <Testimonials />
      <Services />
      <Team />
    </div>
  );
}

export default App;
