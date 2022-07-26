const Restaurant = require("../models/restaurant");
const Review = require("../models/review");

//-----RESTAURANTS-----//
const createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    await restaurant.save();
    return res.status(201).json({
      restaurant,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRestaurantId = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    if (restaurant) {
      return res.status(200).json({ restaurant });
    }
    return res.status(404).send("Can not find this restaurant");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const updateText = req.body;
    console.log(req.body);
    const rest = await Restaurant.findByIdAndUpdate(req.params.id, updateText);
    if (!rest) {
      res.status(500).send("Restaurant not found");
    }
    return res.status(200).json(rest);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deleted = await Restaurant.findByIdAndDelete(req.params.id);
    if (deleted) {
      return res.send({ msg: `restaurant deleted` });
    }
    throw new Error("Restaurant not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//------------REVIEWS---------------//
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    await review.save();
    return res.status(201).json({
      review,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (deleted) {
      return res.send({ msg: `review deleted` });
    }
    throw new Error("Review not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const rest = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ rest });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  updateReview,
  createRestaurant,
  getAllRestaurants,
  getRestaurantId,
  getAllReviews,
  createReview,
  deleteReview,
  updateRestaurant,
  deleteRestaurant,
};
