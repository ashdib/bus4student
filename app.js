import express from "express";
import bodyParser from "body-parser";
import apiRoute from "./routes/apiRoute.js";
import appRoute from "./routes/appRoute.js";
import "dotenv/config";
import { config } from "dotenv";
config();

const app = express();
const port = 3000;

// Use the middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");



// -------------------------Render landing page------------------------------
app.get("/", (req, res) => {
  try {
    res.render("index.ejs");
  } catch (error) {
    console.log(error);
  }
});

// -------------------------Render landing page------------------------------

// ------------------Get the Date, Time and Weather-------------------------
app.use("/app", appRoute);

// ------------------Get the Date, Time and Weather-------------------------

//-------Create API to display data of bus schdule to the ejs file-----------
app.use("/api", apiRoute);
//-------Create API to display data of bus schdule to the ejs file-----------

//--------------------------Setup the port---------------------------
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
