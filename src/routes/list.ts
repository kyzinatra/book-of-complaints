import { Router } from "express";
import { DataBase } from "../models/DB";
import { data } from "../types/interfaces";
const router = Router();

router.get("/", (req, res) => {
	res.status(200);
	DataBase.get().then((value: data[] | unknown) => {
		if (value instanceof Array) {
			value.map(a => {
				const d = new Date(a.date);
				if (a.date) a.date = d.toDateString() + " " + d.toTimeString();
			});
		}
		res.render("list", { value });
	});
});

export { router as listRouter };
