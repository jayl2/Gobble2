import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import ReviewsCard from "./ReviewsCard";
import AddRestaurant from "./AddRestaurant";

const RestDetails = (props) => {
  const [details, setDetails] = useState([]);

  let navigate = useNavigate();
  let { id } = useParams();

  const getDetails = async () => {
    await axios.get(`http://localhost:3001/restaurants/${id}`).then((res) => {
      // console.log(res.data);
      // console.log(res.data.restaurant);
      const test = res.data.restaurant;
      console.log(test);
      setDetails(test);
    });
  };

  useEffect(() => {
    getDetails();
  }, [id]);
  /////////////////////////////////////
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    await axios.get("http://localhost:3001/reviews").then((res) => {
      console.log(res.data);
      const rev = res.data.reviews;
      setReviews(rev);
      console.log(rev);
    });
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      This is RestDetails
      <div>
        <DetailsCard
          name={details.name}
          image={details.image}
          city={details.city}
        />
      </div>
      <div>
        <ReviewsCard name={reviews.name} review={reviews.review} />
      </div>
    </div>
  );
};

export default RestDetails;
