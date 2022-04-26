import './App.css';
import { Navbar, Jumbotron, AboutUs, Portfolio, GoogleRank } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <Portfolio />
      <GoogleRank />
    </div>
  );
}

export default App;
