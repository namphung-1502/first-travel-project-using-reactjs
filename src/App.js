import './App.css';
import Navbar from './components/Navbar/Navbar' 
import { Carousel } from './components/SlideCarousel/Carousel';
import { SearchForm } from './components/SearchForm/SearchForm';
import PopularDestination from './components/PopularDestination/PopularDestination';
import NewLetter from './components/NewLetter/NewLetter';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Carousel/>
        <SearchForm/>
        <PopularDestination/>
        <NewLetter/>
      </Router>
    </div>
  );
}

export default App;
