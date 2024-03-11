import axios from "axios";

class Weather {
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

export default Weather;