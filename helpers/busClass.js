import axios from "axios";

//TODO: Create class of buses
/**
 * Represents a Bus object.
 * @class
 */
class Bus {
  constructor(day, waitingPoint, destinationPoint,dayPeriod) {
    this.busesURL = "http://localhost:3000/api/buses";
    this.day = day;
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
        `http://localhost:3000/api/filter?day=${this.day}&waitingPoint=${this.waitingPoint}&destinationPoint=${this.destinationPoint}`
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
  async getBusWaitingTime() {
    try {
      const getBuses = await this.getBusRoute(); //get the bus array
      const busWaitingTimeObj = getBuses[0];

      // TODO: Create variable that store the data of dayPeriod in the form of array;
      // const dayPeriodArray = busWaitingTimeArray.map((bus) => bus.dayPeriod);

      //FIXME:This function is problem
      //TODO: Create a switch statement to get the bus waiting time based on the day period
      switch (this.dayPeriod) {
        case "morning":
          // Result will store in the getBusWaitingTime function
          return busWaitingTimeObj.busWaitingTime[0].time;
          break;
        case "afternoon":
          return busWaitingTimeObj.busWaitingTime[1].time;
          break;
        case "evening":
          return busWaitingTimeObj.busWaitingTime[2].time;
          break;
        default:
          return "No bus waiting time data";
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Retrieves the bus operate continuously time based on the day period.
   * @returns {Array} An array containing the start and end time of the bus operation.
   * @throws {Error} If an error occurs while retrieving the bus operate continuously time.
   */
  async getBusOperateContinuouslyTime() {
    try {
      const getBuses = await this.getBusRoute(); //get the bus array
      const busOperateContinuouslyTimeArray =
        getBuses[0].busOperateContinuouslyTime;
      // return busOperateContinuouslyTimeArray;
      switch (this.dayPeriod) {
        case "morning":
          return [
            busOperateContinuouslyTimeArray[0].timeStart,
            busOperateContinuouslyTimeArray[0].timeEnd,
          ];
          break;
        case "afternoon":
          return [
            busOperateContinuouslyTimeArray[1].timeStart,
            busOperateContinuouslyTimeArray[1].timeEnd,
          ];
          break;
        case "evening":
          return [
            busOperateContinuouslyTimeArray[2].timeStart,
            busOperateContinuouslyTimeArray[2].timeEnd,
          ];
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