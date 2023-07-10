import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/service/Service';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
    <div className="App">
    <Header/>
  <main className='main'>
  <Home/>
  <About/>
  <Skills/>
  <Service/>
  <Qualification/>
  <Contact/>
  
  </main>
  <Footer/>
  <ScrollUp/>
    </div>
  );
}

export default App;
