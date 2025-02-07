import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true, index: true }
})

export const Url = mongoose.model("shortUrl", urlSchema)