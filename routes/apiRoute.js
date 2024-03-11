import express from "express";
const router = express.Router();
import { getAllBusSchedule, getRoute, getRoutebyId } from "../controllers/apiController.js";

// TODO: Display all the bus schedule

router.get("/buses", getAllBusSchedule);

router.get("/filter", getRoute);

router.get("/filter/:id", getRoutebyId);

export default router;
