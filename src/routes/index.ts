import { Router } from "express";
const router = Router();

router.get("/:name", (req, res) => {
	res.status(200);
	res.render("index", {
		name: req.params.name,
	});
});

router.get("/", (req, res) => {
	res.status(200);
	res.render("index", {
		name: "тебя, мой друг",
	});
});

export { router as indexRouter };
