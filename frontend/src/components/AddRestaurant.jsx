import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRestaurant = (props) => {
  const [newRest, setNewRest] = useState({
    name: "",
    foodType: "",
    city: "",
    town: "",
    description: "",
    image: "",
  });

  const handleNewChange = (e) => {
    setNewRest({ ...newRest, [e.target.name]: e.target.value });
  };

  const addNewRestaurant = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/restaurants", newRest);
    setNewRest({
      name: "",
      foodType: "",
      city: "",
      town: "",
      description: "",
      image: "",
    });
    console.log(newRest);
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    props.onSubmit(e);
    navigate("/restaurants");
  };

  const realTimeDelRest = async (dog) => {
    let index = newRest.indexOf(dog);
    let cat = [...newRest];
    cat.splice(index, 1);
    setNewRest(cat);
  };

  return (
    <div>
      <h1>Add a New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputForm"
          type="text"
          name="name"
          placeholder="Restaurant Name"
          onChange={handleNewChange}
          value={newRest.name}
        />
        <br></br>
        <input
          className="inputForm"
          type="text"
          name="foodType"
          placeholder="Food Category"
          onChange={handleNewChange}
          value={newRest.foodType}
        />
        <br></br>
        <input
          className="inputForm"
          type="text"
          name="city"
          placeholder="City Name"
          onChange={handleNewChange}
          value={newRest.city}
        />
        <br></br>
        <input
          className="inputForm"
          type="text"
          name="town"
          placeholder="Town Name"
          onChange={handleNewChange}
          value={newRest.town}
        />
        <br></br>
        <input
          className="inputForm"
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleNewChange}
          value={newRest.description}
        />
        <br></br>
        <input
          className="inputForm"
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleNewChange}
          value={newRest.image}
        />
        <br></br>
        <br></br>
        <button
          onClick={addNewRestaurant}
          handleSubmit={handleSubmit}
          className="addBtn"
        >
          {" "}
          Add
        </button>
        <br></br>
      </form>
    </div>
  );
};

export default AddRestaurant;
