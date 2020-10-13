import { Router } from "express";
import { DataBase } from "../models/DB";
const router = Router();

router.post("/", (req, res) => {
	res.status(200);
	const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
	const body = req.body;
	DataBase.put({
		name: body.name,
		reason: body.reason,
		content: body.content,
		date: Date.now(),
	});
	res.render("add", {
		name: body.name || "человек",
	});
});

export { router as addRouter };
