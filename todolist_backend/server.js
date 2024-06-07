const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/model");
const userRoutes = require('./app/route/user.router')

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:8081"]
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend." });
});

app.get("/users", (req, res) => {
  res.json({ message: "Access"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


