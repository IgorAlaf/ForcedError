import express from "express";
import sequelize from "./db/db.config.js";
import cors from "cors";
import router from "./routes/index.js";

import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use("/", router);

async function start() {
  try {
    await sequelize.sync().then(() => console.log("db is ready"));
    app.listen(process.env.PORT || 8080, () =>
      console.log("Server is connection")
    );
  } catch (e) {
    console.log("Cannot connect to the server");
  }
}

start();
