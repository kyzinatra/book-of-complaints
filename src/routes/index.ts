import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
	res.status(200);
	res.render("index", {
		name: req.query.name || "Шваль",
		reason: req.query.reason || "Я завистник",
	});
});

export { router as indexRouter };
