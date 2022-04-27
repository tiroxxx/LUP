import './App.css';
import {
  Navbar,
  Jumbotron,
  AboutUs,
  Portfolio,
  GoogleRank,
  Contact,
  Footer
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <Portfolio />
      <GoogleRank />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
