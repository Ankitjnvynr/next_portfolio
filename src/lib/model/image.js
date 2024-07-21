import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    order: { type: Number, required: true },
});

export const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);
