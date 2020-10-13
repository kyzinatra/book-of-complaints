import express from "express";
import path from "path";
import { indexRouter } from "../routes";
import { addRouter } from "../routes/add";
import { listRouter } from "../routes/list";

const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "pug");
app.set("views", "src/pages");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.use("/", indexRouter);
app.use("/add", addRouter);
app.use("/list", listRouter);

app.listen(PORT, () => {
	console.log(`Running on ${PORT}`);
	console.log(new URL("localhost:3001/Кулькова").toString());
});
