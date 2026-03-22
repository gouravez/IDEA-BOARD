import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

import rateLimiter from "./middleware/rateLimiter.js";

// middleware -> function that runs in middle between request and response
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://idea-board-e5lk.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // middleware to PARSE json bodies : req.body

app.use((req, res, next) => {
  next();
});

app.use("/api/notes", notesRoutes);
app.use(rateLimiter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port : ", PORT);
  });
});
