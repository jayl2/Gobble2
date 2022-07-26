const express = require("express"); //installed
const routes = require("./routes");
const db = require("./db");

const logger = require("morgan"); //installed
// const dbCalls = require("./db");
const cors = require("cors"); //installed
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(logger("dev"));
app.use(cors());
app.use(routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
