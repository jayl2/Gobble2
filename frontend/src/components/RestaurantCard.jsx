// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function RestaurantCard(props) {
  return (
    <div>
      <h2 className="restName">{props.name}</h2>
      <img className="restImage" src={props.image} alt={props.name}></img>
      <h2>{props.foodType}</h2>
      <h2>{props.city}</h2>
      <p>{props.desp}</p>
      <button onClick={props.onClick}>Reviews</button>
    </div>
  );
}
