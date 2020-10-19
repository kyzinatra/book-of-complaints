import { Router } from "express";
import { IInfo } from "../types/interfaces";
const router = Router();
router.get("/", (req, res) => {
	res.redirect("/home");
});
router.get("/home", (req, res) => {
	res.status(200);
	const info: any = req.query.info || "";
	try {
		const result: IInfo = JSON.parse(info);
		res.render("index", {
			name: result.name || "Шваль",
			reason: result.reason || "Я завистник",
		});
	} catch (e) {
		res.render("index", {
			name: "Шваль",
			reason: "Я завистник",
		});
	}
});

export { router as indexRouter };
