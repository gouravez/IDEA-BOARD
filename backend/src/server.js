import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

import rateLimiter from "./middleware/ratelimiter.js";

// middleware -> function that runs in middle between request and response
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()); // middleware to PARSE json bodies : req.body
app.use(rateLimiter);

app.use((req, res, next) => {
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port : ", PORT);
  });
});
