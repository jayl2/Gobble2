import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Restaurants from "./components/Restaurants";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <header className="App-header"></header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/Reviews" element={<Reviews />} />
          {/* <Route path='/Restaurant-Details' element =  */}
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
