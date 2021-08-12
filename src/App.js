import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar' 
import { Carousel } from './components/SlideCarousel/Carousel';
import { SearchForm } from './components/SearchForm/SearchForm';
import PopularDestination from './components/PopularDestination/PopularDestination';
import NewLetter from './components/NewLetter/NewLetter';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import TravelVariation from './components/TravelVariation/TravelVariation';
import CarouselAntd from './components/CarouselAntd/CarouselAntd';
import RecentTrip from './components/RecentTrip/RecentTrip';
import Footer from './components/Footer/Footer';
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
        <PopularPlaces/>
        <TravelVariation/>
        <CarouselAntd/>
        <RecentTrip/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
