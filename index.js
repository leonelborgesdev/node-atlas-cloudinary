import express from "express";
import morgan from "morgan";
import { conectToDb } from "./utils/mongoose.js";

const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Hola mundo2"));

app.listen(3000);
console.log("Server is running on port", 3000);
