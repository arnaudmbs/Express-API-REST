import "source-map-support/register";
import express  from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler";
import { productsRouter } from "./routes/productsRouter";

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());

app.use("/products", productsRouter);

app.use(errorHandler);

export default app;
