import axios from "axios";

class weatherClass {
  constructor() {
    this.openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=-6.1592853&lon=106.8613335&appid=${process.env.API_KEY_WEATHER}`;
  }
  // 1ST PROPERTY : Create function to get the weather data
  async getWeatherData() {
    try {
      const response = await axios.get(this.openWeatherURL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

//TODO: Create class of buses
class Bus {
  constructor(dayPeriod) {
    this.busesURL = "http://localhost:3000/api/buses";
    this.dayPeriod = dayPeriod;
  }

  async getAllBusesData() {
    try {
      const response = await axios.get(this.busesURL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getBusWaitingTime() {
    try {
      const getBuses = await this.getAllBusesData();
      const busWaitingTimeArray = getBuses[0].busWaitingTime;

      // TODO: Create variable that store the data of dayPeriod in the form of array;
      // const dayPeriodArray = busWaitingTimeArray.map((bus) => bus.dayPeriod);

      //FIXME:This function is problem
      //TODO: Create a switch statement to get the bus waiting time based on the day period
      switch (this.dayPeriod) {
        case "morning":
          // Result will store in the getBusWaitingTime function
          return busWaitingTimeArray[0].time;
          break;
        case "afternoon":
          return busWaitingTimeArray[1].time;
          break;
        case "evening":
          return busWaitingTimeArray[2].time;
          break;
        default:
          return "No bus waiting time data";
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getBusOperateContinuouslyTime() {}
}

const scheduleDataStore = async (req, res) => {
  try {
    //TODO: Initialize the weatherClass
    const weather = new weatherClass();
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

    // TODO:Called the function of Bus
    const bus = new Bus("afternoon");

    // JavascScript object of all buses
    const allBuses = await bus.getAllBusesData();

    // Filter bus based on waiting point and destination point
    

    // Array of bus waiting time
    const waitingTime = await bus.getBusWaitingTime();

    // console.log(infoBar);
    // console.log(allBuses);
    console.log(waitingTime);

    res.status(200).render("schedule", { infoBar: infoBar });
  } catch (error) {
    console.log(error);
  }
};

export default scheduleDataStore;
