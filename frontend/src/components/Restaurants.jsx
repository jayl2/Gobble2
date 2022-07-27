import axios from "axios"; //installed
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [rests, setRests] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const getRests = async () => {
      const res = await axios
        .get("http://localhost:3001/restaurants/get")
        .then((res) => {
          console.log(res.data.restaurants);
          setRests(res.data.restaurants);
        });
    };

    getRests();
  }, []);

  return (
    <div>
      <div className="restaurants">
        {rests.map((rest) => (
          <RestaurantCard
            key={rest.name}
            name={rest.name}
            foodType={rest.foodType}
            city={rest.city}
            image={rest.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
