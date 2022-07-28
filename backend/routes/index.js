const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.post("/restaurants", controllers.createRestaurant);

router.get("/restaurants", controllers.getAllRestaurants);

router.delete("/restaurants/:id", controllers.deleteRestaurant);

router.get("/restaurants/:id", controllers.getRestaurantId);

router.get("/reviews", controllers.getAllReviews);

router.post("/reviews", controllers.createReview);

router.delete("/review/:id", controllers.deleteReview);

router.put("/review/:id", controllers.updateReview);

module.exports = router;
