export default function RestaurantCard(props) {
  return (
    <div>
      <h2 className="restName">{props.name}</h2>
      <img className="restImage" src={props.image} alt={props.name} />
      <h2>{props.foodType}</h2>
      <h2>{props.city}</h2>
      <p>{props.desp}</p>
    </div>
  );
}
