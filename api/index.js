const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const psotRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

app.use("api/auth", authRoute);
app.use("api/posts", postRoute);

app.listen(3000, () => {
	console.log("Server is running");
});
