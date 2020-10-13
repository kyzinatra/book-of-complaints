import { Router } from "express";
const router = Router();

router.get("/:name", (req, res) => {
	res.status(200);
	console.log();
	res.render("index", {
		name: req.params.name,
		reason: req.query.reason,
	});
});

router.get("/", (req, res) => {
	res.status(200);
	res.render("index", {
		name: "Тебя, мой друг",
		reason: "По приколу",
	});
});

export { router as indexRouter };
