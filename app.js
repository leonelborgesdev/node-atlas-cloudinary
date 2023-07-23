import express from "express";
import morgan from "morgan";
import cors from "cors";
import fileupload from "express-fileupload";

import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(indexRoutes);
app.use(productsRoutes);
export default app;
