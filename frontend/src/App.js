import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Restaurants from "./components/Restaurants";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import RestDetails from "./components/RestDetails";

function App() {
  let navigate = useNavigate();

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
          <Route path="/Restaurant-Details/:id" element={<RestDetails />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
