import './App.css';
import { Navbar, Jumbotron, AboutUs, Portfolio } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <Portfolio />
    </div>
  );
}

export default App;
