import axios from "axios"; //installed
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [rests, setRests] = useState([]);
  //
  let navigate = useNavigate();

  // const navigateToShowRest = () => {
  //   navigate("/RestDetails");
  // };

  const showRest = (rest) => {
    navigate(`${rest.id}`);
  };

  useEffect(() => {
    const getRests = async () => {
      await axios.get("http://localhost:3001/restaurants").then((res) => {
        setRests(res.data.restaurants);
      });
    };

    getRests();
  }, []);

  if (!rests) {
    return <h1>Heating things up... Please wait!</h1>;
  } else {
    return (
      <div>
        <div className="restaurants">
          {rests.map((rest) => (
            <RestaurantCard
              id={rest._id}
              key={rest.name}
              name={rest.name}
              foodType={rest.foodType}
              city={rest.city}
              image={rest.image}
              onClick={() => navigate(`/Reviews/${rest._id}`)}
            />
          ))}
          <button className="backBtn">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    );
  }
};
export default Restaurants;
