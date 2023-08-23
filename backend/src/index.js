import express from "express";
import { prisma } from "./prisma/prisma.js";
import cors from "cors";
import router from "./routes/routes.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));

app.use(router);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
