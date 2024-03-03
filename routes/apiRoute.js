import express from "express";
const router = express.Router();
import { getAllBusSchedule, getBus } from "../controllers/apiController.js";

// TODO: Display all the bus schedule

router.get("/buses", getAllBusSchedule);

router.get("/buses/:route", getBus);

export default router;
