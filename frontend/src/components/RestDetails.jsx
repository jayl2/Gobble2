import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsCard from "./DetailsCard";

const RestDetails = (props) => {
  const [details, setDetails] = useState([]);

  let navigate = useNavigate();
  let { id } = useParams();

  const getDetails = async () => {
    await axios.get(`http://localhost:3001/restaurants/${id}`).then((res) => {
      console.log(res.data);
      console.log(res.data.restaurant);
      const test = res.data.restaurant;
      console.log(test);
      setDetails(test);
    });
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div>
      This is RestDetails
      <div>
        <DetailsCard name={details.name} image={details.image} />
      </div>
    </div>
  );
};

export default RestDetails;
