import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import Footer from "./pages/Footer";

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
