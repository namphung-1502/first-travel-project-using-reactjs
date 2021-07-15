import './App.css';
import Navbar from './components/Navbar/Navbar' 
import { Carousel } from './components/SlideCarousel/Carousel';
import { BrowserRouter as Router } from 'react-router-dom'
import { SliderData } from './components/SlideCarousel/SliderData'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Carousel/>
      </Router>
    </div>
  );
}

export default App;
