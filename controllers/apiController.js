import busSchedules from "../models/busSchedule.js";

const getAllBusSchedule = async (req, res) => {
    try {
        res.status(200).json(busSchedules);
    } catch (error) {
        console.log(error);
    }
};

const getBus = async (req, res) => {};

export { getAllBusSchedule, getBus };