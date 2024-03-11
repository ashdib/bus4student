import Bus from "../helpers/busClass.js";
import Weather from "../helpers/weatherClass.js";

const scheduleDataStore = async (req, res) => {
  try {
    //TODO: Initialize the weatherClass
    const weather = new Weather();
    //TODO: Get the weather data from the weather class
    const weatherData = await weather.getWeatherData();

    //TODO: Create an object to store the date, time and weather data
    const infoBar = {
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
      currentWeather: [
        weatherData.weather[0].main,
        weatherData.weather[0].description,
      ],
    };

    res.status(200).render("schedule", { infoBarObject: infoBar });
  } catch (error) {
    console.log(error);
  }
};

const busSchedulesDataStore = async (req, res) => {
  try {
    // TODO: Implement logic of get current day
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const indexDay = new Date().getDay();
    let day = weekday[indexDay];

    const waitingPoint = req.body.waitingPoint;
    const destinationPoint = req.body.destinationPoint;
    // TODO: Create a new bus object
    // FIXME: Error appears when the day is not defined
    const bus = new Bus("Mon", waitingPoint,destinationPoint, "morning");
    const waitingTimes = await bus.getBusWaitingTime();
    console.log(waitingTimes);
    // console.log(day);
    console.log(waitingPoint);
    console.log(destinationPoint);
  } catch (error) {
    console.log(error.message);
  }
};

export { scheduleDataStore, busSchedulesDataStore };
