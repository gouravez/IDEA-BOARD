import express from "express";
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

import rateLimiter from "./middleware/ratelimiter.js";

// middleware -> function that runs in middle between request and response
app.use(express.json()); // middleware to PARSE json bodies : req.body
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log("Request Method is : ", req.method);
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port : ", PORT);
  });
});
