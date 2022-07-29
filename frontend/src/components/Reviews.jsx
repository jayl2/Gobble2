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

  //getting reviews
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="RestaurantName"></label>
          <br></br>
          <input
            className="NewRestForm"
            placeholder="Retaurant Name"
            type="text"
            id="RestaurantName"
            onChange={handleChange}
            value={formState.subject}
          />
          <br></br>
          <label htmlFor="name"></label>
          <input
            className="NewRestForm"
            placeholder="Name"
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.subject}
          />
          <br></br>
          <label htmlFor="review"></label>
          <input
            className="NewRestForm2"
            placeholder="Place your Review"
            type="text"
            id="review"
            onChange={handleChange}
            value={formState.subject}
          />
          <br></br>
          <br></br>
          <button className="reviewBtn" type="submit">
            Submit
          </button>
        </form>

        <div>
          {reviews.map((review) => (
            <div>
              {/* <p>{</p> */}
              <h2>{review.RestaurantName}</h2>
              <p>{review.name}</p>
              <p>{review.review}</p>
              <button
                className="reviewBtn"
                onClick={() => {
                  handleDelete(review._id);
                  realTimeDelete(review);
                }}
              >
                Delete
              </button>
              <button
                className="reviewBtn"
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
