import mongoose from "mongoose";

// 1. Create a schema
const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // created At, updated At
);

// 2. Create a model off of that schema
export const Note = mongoose.model("Note", notesSchema);
