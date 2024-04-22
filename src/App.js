import './App.css';
import Home from './components/Home/Home';
import Header from './components/Home/Header'
import Footer from './components/Home/Footer';
import Education from './components/Education/Education';
function App() {
  return (
    <div className="App">
    <Header />  
    <Home />
    <Education />
    <Footer />
    </div>
  );
}

export default App;
