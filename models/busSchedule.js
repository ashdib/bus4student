// TODO:  Create a data for the bus schedule in the form of  JavaScript object
const busSchedules = [
  // TODO: first route data
  {
    route: 1,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: "KPZ",
    destinationPoint: "MainCampus",
    busWaitingTime: [
      {
        dayPeriod: "morning",
        time: [
          "10:15",
          "10:30",
          "10:45",
          "11:00",
          "11:15",
          "11.30",
          "11:45",
          "7:00",
        ],
      },
      {
        dayPeriod: "afternoon",
        time: [
          "14:00",
          "14:15",
          "14:30",
          "14:45",
          "15:00",
          "15:15",
          "15:30",
          "15:45",
        ],
      },
      {
        dayPeriod: "evening",
        time: [
          "19:15",
          "19:30",
          "19:45",
          "20:00",
          "20:15",
          "20:30",
          "21:00",
          "21:30",
          "22:00",
          "22:30",
          "23:00",
        ],
      },
    ],
    busOperateContinuouslyTime: [
      { dayPeriod: "morning", timeStart: "7:00", timeEnd: "10:00" },
      { dayPeriod: "noon", timeStart: "12:00", timeEnd: "14:00" },
      { dayPeriod: "evening", timeStart: "16:00", timeEnd: "19:00" },
    ],
  },
  // TODO: Create second route data
  {
    route: 2,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: "Perhentian Bas Serumpun",
    destinationPoint: "Main Campus",
    busWaitingTime: [
      {
        dayPeriod: "morning",
        time: [
          "10:15",
          "10:30",
          "10:45",
          "11:00",
          "11:15",
          "11.30",
          "11:45",
          "7:00",
        ],
      },
      {
        dayPeriod: "afternoon",
        time: [
          "14:00",
          "14:15",
          "14:30",
          "14:45",
          "15:00",
          "15:15",
          "15:30",
          "15:45",
        ],
      },
      {
        dayPeriod: "evening",
        time: [
          "19:15",
          "19:30",
          "19:45",
          "20:00",
          "20:15",
          "20:30",
          "21:00",
          "21:30",
          "22:00",
          "22:30",
          "23:00",
        ],
      },
    ],
    busOperateContinuouslyTime: [
      { dayPeriod: "morning", timeStart: "7:00", timeEnd: "10:00" },
      { dayPeriod: "noon", timeStart: "12:00", timeEnd: "14:00" },
      { dayPeriod: "evening", timeStart: "16:00", timeEnd: "19:00" },
    ],
  },
];

export default busSchedules;
