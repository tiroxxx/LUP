import './App.css';
import { Navbar, Jumbotron, AboutUs, Portfolio, GoogleRank, Contact } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <Portfolio />
      <GoogleRank />
      <Contact />
    </div>
  );
}

export default App;
