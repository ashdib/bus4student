// This file will define the routes that refer to the internal API for bus scheduling
import express from "express";
const router = express.Router();
import {
  scheduleDataStore,
  busSchedulesDataStore,
} from "../controllers/appController.js";

router.get("/schedule", scheduleDataStore);

router.post("/search-schedules", busSchedulesDataStore);

export default router;
