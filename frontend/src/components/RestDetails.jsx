import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import ReviewsCard from "./ReviewsCard";

const RestDetails = (props) => {
  const [details, setDetails] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      await axios.get(`http://localhost:3001/restaurants/${id}`).then((res) => {
        // console.log(res.data);
        // console.log(res.data.restaurant);
        const test = res.data.restaurant;
        console.log(test);
        setDetails(test);
      });
    };

    getDetails();
  }, [id]);
  ///////////////////////////////////
  const [reviews, setReviews] = useState([]);

  // const getReviews = async () => {
  //   await axios.get("http://localhost:3001/reviews").then((res) => {
  //     // console.log(res.data);
  //     const rev = res.data.reviews;
  //     console.log(rev);
  //     setReviews(rev);
  //   });
  // };
  // useEffect(() => {
  //   getReviews();
  // }, []);

  console.log(reviews);
  return (
    <div>
      <div>
        <DetailsCard
          name={details.name}
          image={details.image}
          city={details.city}
        />
      </div>
      <div></div>
    </div>
  );
};

export default RestDetails;
