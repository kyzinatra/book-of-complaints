import { Router } from "express";
import { DataBase } from "../models/DB";
const router = Router();

router.get("/", (req, res) => {
	res.status(200);
	DataBase.get().then(result => {
		res.render("list", { result });
	});
});

export { router as listRouter };
