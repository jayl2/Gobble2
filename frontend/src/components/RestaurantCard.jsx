// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function RestaurantCard(props) {
  const deleteRest = async (id) => {
    console.log(props);
    const res = await axios.delete(`http://localhost:3001/restaurants/${id}`);
    console.log(res);
  };

  return (
    <div>
      <h2 className="restName">{props.name}</h2>
      <img className="restImage" src={props.image} alt={props.name}></img>
      <h2>{props.foodType}</h2>
      <h2>{props.town}</h2>
      <h2>{props.city}</h2>
      <p>{props.desp}</p>
      <button className="reviewBtn" onClick={props.onClick}>
        Details
      </button>
      <button className="reviewBtn" onClick={() => deleteRest(props.id)}>
        {" "}
        Delete
      </button>
    </div>
  );
}
