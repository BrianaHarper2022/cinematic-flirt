import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
