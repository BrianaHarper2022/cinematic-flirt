import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import GettingStarted from "./pages/GettingStarted";
import OurGuidelines from "./pages/OurGuidelines"
import PrivacyAndSafety from "./pages/PrivacyAndSafety"
import Layout from "./Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="SignIn" element={<SignIn/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Support" element={<Support/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="GettingStarted" element={<GettingStarted/>}/>
          <Route path="OurGuidelines" element={<OurGuidelines/>}/>
          <Route path="PrivacyAndSafety" element={<PrivacyAndSafety/>}/>
        </Route>
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
