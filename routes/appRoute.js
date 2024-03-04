// This file will define the routes that refer to the internal API for bus scheduling
import express from "express";
const router = express.Router();
import scheduleDataStore from "../controllers/appController.js";

router.get("/schedule", scheduleDataStore);

export default router;
