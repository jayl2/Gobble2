export default function DetailsCard(props) {
  return (
    <div>
      <h2 className="restName">{props.name}</h2>
      <img className="DetailImage" src={props.image} alt={props.name}></img>
      <h2>{props.foodType}</h2>
      <h2>{props.city}</h2>
      <p>{props.desp}</p>
    </div>
  );
}
