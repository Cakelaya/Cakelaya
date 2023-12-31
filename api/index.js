const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const giftRoute = require("./routes/gift");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const bodyParser = require("body-parser");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
  }
})

const upload = multer({ storage: storage });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/gift", giftRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.post("/api/images", upload.single("image"), (req, res) => {
  const imageName = req.file.filename;
  const url = req.protocol + "://" + req.get("host");
  const img = url + "/images/" + imageName;
  res.send({ img });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client/build/index"));

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is Running");
});
