import { data } from "../types/interfaces";
import { writeFile, readFile } from "fs";

export class DataBase {
	public static async put(data: data) {
		return new Promise((resolve, reject) => {
			readFile("src/data/data.json", "utf-8", (err, res) => {
				if (err) reject(err);
				const DB = JSON.parse(res) || [];
				DB.push(data);
				writeFile("src/data/data.json", JSON.stringify(DB), "utf-8", err => {
					if (err) reject(err);
					resolve(DB);
				});
			});
		});
	}

	public static async get() {
		return new Promise((resolve, reject) => {
			readFile("src/data/data.json", "utf-8", (err, res) => {
				if (err) reject(err);
				const DB = JSON.parse(res);
				resolve(DB);
			});
		});
	}
}
