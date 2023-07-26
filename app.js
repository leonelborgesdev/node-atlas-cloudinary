import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/user.routes.js";
import clientRoutes from "./routes/client.routes.js";

const app = express();

//middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"));

app.use(indexRoutes);
app.use(productsRoutes);
app.use(userRoutes);
app.use(clientRoutes);
export default app;
