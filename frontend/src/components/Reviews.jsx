import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const initialState = {
    RestaurantName: "",
    name: "",
    review: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        if (submitted) {
          let res = await axios.get("http://localhost:3001/reviews");
          const rev = res.data.reviews;
          setReviews(rev);
          setSubmitted(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getReviews();
  }, [submitted]);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/reviews/", formState);
    console.log(res.data.reviews);
    console.log(formState);
    setFormState(initialState);
    setSubmitted(true);
    e.target.reset();
  };

  const handleDelete = async (_id) => {
    let res = await axios
      .delete(`http://localhost:3001/review/${_id}`)
      .catch((error) => console.log(error));
    console.log(res.data.reviews);
  };

  //setting real time deletes on screen.
  const realTimeDelete = async (dog) => {
    let index = reviews.indexOf(dog);
    let cat = [...reviews];
    cat.splice(index, 1);
    setReviews(cat);
  };

  const handleUpdates = async (_id) => {
    let res = await axios
      .put(`http://localhost:3001/review/${_id}`, formState)
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        {/* {" "}
        This is reviews
        {reviews.map((review) => (
          <ReviewsCard
            key={review._id}
            restName={review.RestaurantName}
            name={review.name}
            review={review.review}
          />
        ))} */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="RestaurantName">Restaurant Name</label>
          <input
            type="text"
            id="RestaurantName"
            onChange={handleChange}
            value={formState.subject}
          />
          <br></br>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.subject}
          />
          <br></br>
          <label htmlFor="review">Review</label>
          <input
            type="text"
            id="review"
            onChange={handleChange}
            value={formState.subject}
          />
          <button type="submit">Submit</button>
        </form>

        <div>
          {reviews.map((review) => (
            <div>
              {/* <p>{</p> */}
              <h2>{review.RestaurantName}</h2>
              <p>{review.name}</p>
              <p>{review.review}</p>
              <button
                onClick={() => {
                  handleDelete(review._id);
                  realTimeDelete(review);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleUpdates(review._id, formState);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
