import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About.js';
import Homepage from './pages/Homepage.js'
import Destination from './pages/Destination';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/about' component={About} />
          <Route path='/destination' exact component={Destination}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
