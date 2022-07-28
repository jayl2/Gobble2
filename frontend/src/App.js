import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Restaurants from "./components/Restaurants";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import RestDetails from "./components/RestDetails";
import AddRestaurant from "./components/AddRestaurant";

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
          <Route path="/Reviews/:id" element={<RestDetails />} />
          <Route path="/restaurants/new" element={<AddRestaurant />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
