const router = require("express").Router();
const { createSearchParams } = require("react-router-dom");
const Category = require("../models/Category");

router.post("/Category", async (req, res) => {
	const newCat = new Category(req.body);
	try {
		const savedCat = await newCat.save();
		res.status(200).json(savedCat);
	} catch (er) {
		res.status(500).json(err);
	}
});

router.get("/", async (req, res) => {
	try {
		const cats = await Category.find();
		res.status(200).json(cats);
	} catch (er) {
		res.status(500).json(err);
	}
});

module.exports = router;
