import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  venue: String,
  price: Number,
  seats: Number,
  bookedSeats: { type: Number, default: 0 }
});

export default mongoose.model("Event", eventSchema);
