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
    const waitingPointUser = req.query.waitingPoint;
    const destinationPointUser = req.query.destinationPoint;

    // TODO: Compare  the waitingPoint from user with the busSchedules data
    const getMatchingSchedules = busSchedules.filter((busSchedule) => {
      return (
        busSchedule.waitingPoint.includes(waitingPointUser) &&
        busSchedule.destinationPoint === destinationPointUser
      );
    });
    // check if the getMatchingSchedules is empty that means the route does not exist
    if (getMatchingSchedules.length === 0) {
      res.status(404).json({ message: "This route does not exist" });
    } else {
      // If the waiitngPoint and destinationPoint are matched, then return the bus schedule
      res.status(200).json(getMatchingSchedules);
    }
  } catch (error) {
    console.log(error);
  }
};

const getRoutebyId = async (req, res) => {
  try {
    const id = req.params.id;
    const getMatchingSchedules = busSchedules.filter(
      (busSchedule) => busSchedule.route === parseInt(id)
    );
    res.status(200).json(getMatchingSchedules);
  } catch (error) {
    console.log(error);
  }
};

export { getAllBusSchedule, getRoute, getRoutebyId };
