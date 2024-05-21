const express = require("express");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://anshikagarg883:arnikagarg@cluster0.g7ojezx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB failed to connect", err));

app.use("/api/v1/auth", authRoute);

app.listen(3000, () => {
  console.log(`backend Server running at port ${3000} `);
});
