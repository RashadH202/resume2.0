import './App.css';
import Home from './components/Home/Home';
import Header from './components/Home/Header'
import Footer from './components/Home/Footer';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Skills/Portfolio';
import Experience from './components/Experiences/Experience';
function App() {
  return (
    <div className="App">
    <Header />  
    <Home />
    <Experience />
    <Education />
    <Skills />
    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;
