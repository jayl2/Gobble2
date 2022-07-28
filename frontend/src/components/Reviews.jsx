import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      await axios.get("http://localhost:3001/reviews").then((res) => {
        console.log(res.data);
        const rev = res.data.reviews;
        console.log(rev);
        console.log(res);
        setReviews(rev);
        console.log(reviews);
      });
    };

    getReviews();
  }, []);

  return (
    <div>
      <div>
        {" "}
        This is reviews
        {reviews.map((review) => (
          <ReviewsCard
            key={review._id}
            restName={review.RestaurantName}
            name={review.name}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
