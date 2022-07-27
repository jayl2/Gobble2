const db = require("../db");
const Restaurant = require("../models/restaurant");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const restaurants = [
    {
      name: "Queensyard",
      foodType: "Contemporary",
      city: "New York",
      town: "New York",
      description:
        "A restaurant, kitchen and bar from D&D London with a menu that focuses on British cooking but features influences from both sides of the Atlantic. The perfect spot for a light lunch, after-work drink or cozy dinner in the Dining Room overlooking VESSEL.",
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/property_card/public/2019-08/White%20Aspargus%20poached%2C%20riesling%2C%20candied%20pink%20peppercorns%2C%20pine%20nuts%2C%20sour%20cream%20%26%20chives.jpg?itok=dP0eNKqS",
    },
    {
      name: "Wild Ink ",
      foodType: "Asian-American",
      city: "New York",
      town: "New York",
      description:
        "An Asian-inspired restaurant serving handmade dumplings within an incredible East meets West menu. The destination bar serves up craft cocktails and light bites through lunch and dinner with views of VESSEL.",
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/property_card/public/acquia-dam-assets/2020-08/Wild%20Ink_dining_1000X610.png?h=a0c1a9c0&itok=31OqRKh5",
    },
    {
      name: "Peak ",
      foodType: "American",
      city: "New York",
      town: "New York",
      description:
        "Helmed by Executive Chef Chris Cryer and designed by renowned architect David Rockwell, Peak is an exciting addition to NYC's restaurant scene, offering impressive views of the city, dramatic design, notable art, elevated menus and warm hospitality.",
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/property_card/public/2022-06/Peak-Restaurant_256_1585947862_1440x810%2012.2.jpg?h=2d44e782&itok=9Rr2gzaY",
    },
    {
      name: "Estiatorio Milos ",
      foodType: "Mediterranean",
      city: "New York",
      town: "New York",
      description:
        "Recognized as one of the world's finest Mediterranean seafood restaurants, acclaimed Chef Costas Spiliadis, has created unparalleled culinary destinations with locations around the globe.",
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/content_detail/public/acquia-dam-assets/2020-08/Fish%20in%20Sea%20Salt%20%28Credit%20estiatorio%20Milos%29_1000X610.jpg?h=a0c1a9c0&itok=WbdeEmM6",
    },
    {
      name: "Electric Lemon  ",
      foodType: "Breakfast",
      city: "New York",
      town: "New York",
      description:
        "Electric Lemon, a seasonal American restaurant, celebrates the farmers, growers and artisans of the Mid-Atlantic, transforming their pristine products into clean, conscious cuisine.",
      image:
        "https://www.hudsonyardsnewyork.com/sites/default/files/styles/property_card/public/2020-08/Chickpea%20Pasta_1000X610.jpg?h=a0c1a9c0&itok=4fbc3q7J",
    },
  ];

  await Restaurant.insertMany(restaurants);
  console.log("Got some restaurants!");
};
const run = async () => {
  await main();
  db.close();
};

run();
