import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: { type: String },
   
    description: { type: String},
    title: { type: String },
    order: { type: Number },
},{
    timestamps: true
});

export const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);
