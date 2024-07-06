import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Homepage />
        <SignIn />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
