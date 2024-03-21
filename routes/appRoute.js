// This file will define the routes that refer to the internal API for bus scheduling
import express from "express";
const router = express.Router();
import {
  renderSchedulePage,
  busSchedulesDataStore,
} from "../controllers/appController.js";

// FIXME: The route is not working
router.get("/schedule",  renderSchedulePage);

router.post("/search-schedules", busSchedulesDataStore);

export default router;
