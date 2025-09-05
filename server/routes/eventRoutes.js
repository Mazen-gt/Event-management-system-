import express from "express";
import Event from "../models/Event.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});


router.post("/", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
