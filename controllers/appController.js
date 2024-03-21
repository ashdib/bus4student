import Bus from "../helpers/busClass.js";
import Weather from "../helpers/weatherClass.js";

const renderSchedulePage = async (req, res) => {
  const weather = new Weather();
  const weatherData = await weather.getWeatherData();
  const infoBar = {
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    currentWeather: [
      weatherData.weather[0].main,
      weatherData.weather[0].description,
    ],
  };
  res.render("schedule", { infoBarObject: infoBar });
};


const busSchedulesDataStore = async (req, res) => {
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
    // TODO: Implement logic of get current day
    const date = new Date();
    const day = date.getDay();

    // TODO: Create dynamic dayPeriod based on the current time

    const waitingPoint = req.body.waitingPoint;
    const destinationPoint = req.body.destinationPoint;
    const dayPeriod = req.body.dayPeriod;
    // TODO: Create a new bus object
    // intialize the bus object and dynamic variable of dayPeriod
    const bus = new Bus(waitingPoint, destinationPoint, dayPeriod);
    // const waitingTimesWeekDays = await bus.getBusWaitingTimeWeekDays();
    // waitingTimesWeekDaysArray[0] : return the object of busOperateContinuouslyTime if there is the busOperateContinuously
    // console.log(waitingTimesWeekDays);
    // TODO: Implement logic to get the bus waiting time based on the day whether it is a weekday or weekend
    if (day > 0 && day < 6) {
      const waitingTimesWeekDaysArray = await bus.getBusWaitingTimeWeekDays();
      // waitingTimesWeekDaysArray[0] : return the object of busOperateContinuouslyTime if there is the busOperateContinuously

      //FIXME: The waitingTimesWeekDaysArray is not working
      res.render("schedule", {
        waitingTimesWeekDaysArray: waitingTimesWeekDaysArray,
        infoBarObject: infoBar,
      });
    } else {
      const waitingTimesWeekends = await bus.getBusWaitingTimeWeekends();
      console.log(waitingTimesWeekends);
      res.render("schedule", {
        waitingTimesWeekendsArray: waitingTimesWeekends,
        infoBarObject: infoBar,
      });
      //FIXME: The waitingTimesWeekDaysArray is not working
    }

    //TODO: Test whether the waitingTimesWeekends is working
  } catch (error) {
    console.log(error.message);
  }
};

export { busSchedulesDataStore, renderSchedulePage };
