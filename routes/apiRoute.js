import express from "express";
const router = express.Router();
import { getAllBusSchedule, getRoute } from "../controllers/apiController.js";

// TODO: Display all the bus schedule

router.get("/buses", getAllBusSchedule);

router.get("/filter", getRoute);

export default router;
