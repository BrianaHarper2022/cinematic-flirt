import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
