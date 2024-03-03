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

const scheduleController = async (req, res) => {
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

    console.log(infoBar);

    res.status(200).render("schedule", {infoBar: infoBar});
  } catch (error) {
    console.log(error);
  }
};

export default scheduleController;