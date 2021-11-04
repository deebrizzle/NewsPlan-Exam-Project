import express from "express";
import cors from "cors";

// import { ideasRouter } from "./src/routes/ideas.route.js"
// import { calendarRouter } from "./src/routes/calendar.route.js"
// import { contentRouter } from "./src/categories/content.route.js"

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
// app.use('/ideabank', ideasRouter);
// app.use('/calendar', calendarRouter);
// app.use('/contentschedule', contentRouter);

// Index
app.get("/", (req, res) => res.send("<h1>Welcome to the NewsPlan.</h1> <div>The premium publication management software for newspapers, magazines and prints.</div> <div>Please enter /api/ to start. </div>"));

// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("NewsPlan RESTful API Server listening on port", PORT);
});
