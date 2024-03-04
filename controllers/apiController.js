import busSchedules from "../models/busSchedule.js";

const getAllBusSchedule = async (req, res) => {
  try {
    res.status(200).json(busSchedules);
  } catch (error) {
    console.log(error);
  }
};

const getRoute = async (req, res) => {
  // FIXME:Problem appears when the model represent the waitingPoint as array
  try {
    // TODO: Get the waiting point and destination point from the QUERY PARAMETER of API URL
    const waitingPoint = req.query.waitingPoint;
    const destinationPoint = req.query.destinationPoint;
    // TODO: Compare  the waitingPoint from user with the busSchedules data
    const getMatchingSchedules = busSchedules.filter((busSchedule) => {
      return (
        busSchedule.waitingPoint === waitingPoint &&
        busSchedule.destinationPoint === destinationPoint
      );
    });
    res.status(200).json(getMatchingSchedules);
  } catch (error) {
    console.log(error);
  }
};

export { getAllBusSchedule, getRoute };
