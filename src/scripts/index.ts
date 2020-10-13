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

const server = require("http").Server(app);
// var io = require("socket.io")(server, {});
server.listen(3000, "0.0.0.0");

// app.listen(PORT, "0.0.0.0", () => {
// 	console.log(`Running on ${PORT} from ${"0.0.0.0"}`);
// });
