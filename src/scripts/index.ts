import express from "express";
import path from "path";
import { indexRouter } from "../routes";
const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "pug");
app.set("views", "src/pages");

app.use(express.static("src/public"));
app.use("/", indexRouter);

app.listen(PORT, () => {
	console.log(`Running on ${PORT}`);
	console.log(new URL("localhost:3001/Кулькова").toString());
});
