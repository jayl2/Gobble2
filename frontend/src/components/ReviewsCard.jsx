export default function ReviewsCard(props) {
  console.log(props);

  return (
    <div>
      <h1>hello</h1>
      <h2>{props.name}</h2>
      <p> {props.review}</p>
      <p> {props.restName}</p>
    </div>
  );
}
