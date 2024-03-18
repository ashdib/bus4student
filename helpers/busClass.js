import axios from "axios";

//TODO: Create class of buses
/**
 * Represents a Bus object.
 * @class
 */
class Bus {
  constructor(waitingPoint, destinationPoint, dayPeriod) {
    this.busesURL = "http://localhost:3000/api/buses";

    this.waitingPoint = waitingPoint;
    this.destinationPoint = destinationPoint;
    this.dayPeriod = dayPeriod;
  }

  /**
   * Retrieves all buses data.
   * @returns {Promise} A promise that resolves to the data of all buses.
   */
  async getAllBusesData() {
    try {
      const response = await axios.get(this.busesURL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Retrieves the bus route based on the waiting point and destination point.
   * @returns {Promise} A promise that resolves to the bus route data.
   */

  // FIXME: Alter this to filer the waitingPoint & destinationPoint from
  async getBusRoute() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/filter?waitingPoint=${this.waitingPoint}&destinationPoint=${this.destinationPoint}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Retrieves the bus waiting time based on the day period.
   * @returns {string} The bus waiting time for the specified day period.
   */
  async getBusWaitingTimeWeekDays() {
    try {
      const getBuses = await this.getBusRoute(); //get the bus array
      //TODO: Error handling when the bus array empty(not exist of the rpute in API)
      if(!getBuses || getBuses.length === 0){
        console.log("This route does not exist");
        throw new Error("This route does not exist");
      }
      const busWaitingTimeObj = getBuses[0];

      // TODO: Create variable that store the data of dayPeriod in the form of array;
      // const dayPeriodArray = busWaitingTimeArray.map((bus) => bus.dayPeriod);

      //FIXME:This function is problem
      //TODO: Create a switch statement to get the bus waiting time based on the day period
      switch (this.dayPeriod) {
        case "morning":
          // Result will store in the getBusWaitingTime function
          // Return an array of times
          return busWaitingTimeObj.busWaitingTimeWeekDays[0].time;
          break;
        case "afternoon":
          return busWaitingTimeObj.busWaitingTimeWeekDays[1].time;
          break;
        case "evening":
          return busWaitingTimeObj.busWaitingTimeWeekDays[2].time;
          break;
        default:
          return "No bus waiting time data";
      }
    } catch (error) {
      console.log(error);
    }
  }

  //TODO: Create a function to get the bus waiting time for the weekend
  async getBusWaitingTimeWeekends() {
    try {
      const getBuses = await this.getBusRoute(); //get the bus array
      const busWaitingTimeObj = getBuses[0];
      //FIXME:This function is problem
      //TODO: Create a switch statement to get the bus waiting time based on the day period
      switch (this.dayPeriod) {
        case "morning":
          // Result will store in the getBusWaitingTime function
          // Return an array of times
          return busWaitingTimeObj.busWaitingTimeWeekends[0].time;
          break;
        case "afternoon":
          return busWaitingTimeObj.busWaitingTimeWeekends[1].time;
          break;
        case "evening":
          return busWaitingTimeObj.busWaitingTimeWeekends[2].time;
          break;
        default:
          return "No bus waiting time data";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Bus;
