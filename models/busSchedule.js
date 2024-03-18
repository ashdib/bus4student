// TODO:  Create a data for the bus schedule in the form of  JavaScript object
/**
 * Array of bus schedules.
 *
 * @type {Array<Object>}
 */
/**
 * Array of bus schedules.
 * @type {Array<Object>}
 */
const busSchedules = [
  // -------------------------- First Route Data --------------------------
  {
    route: 1,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    waitingPoint: ["KPZ", "KTAG"],
    destinationPoint: "MainCampus",
    busWaitingTimeWeekDays: [
      {
        dayPeriod: "morning",
        time: [
          {
            busOperateContinuouslyTime: [
              { timeStart: "07:00", timeEnd: "10:00" },
            ],
          },
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
          {
            busOperateContinuouslyTime: [
              { timeStart: "12:00", timeEnd: "14:00" },
            ],
          },
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
          {
            busOperateContinuouslyTime: [
              { timeStart: "16:00", timeEnd: "19:00" },
            ],
          },
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
    // ---------------------------  busWaitingTimeWeekends ---------------------------
    busWaitingTimeWeekends: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10:30", "11:30", "12.30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30", "23:00"],
      },
    ],
  },
  // -------------------------- Second Route Data --------------------------
  {
    route: 2,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: ["SERUMPUN"],
    destinationPoint: "MainCampus",
    busWaitingTimeWeekDays: [
      {
        dayPeriod: "morning",
        time: [
          {
            busOperateContinuouslyTime: [
              { timeStart: "07:00", timeEnd: "10:00" },
            ],
          },
          "10:15",
          "10:30",
          "10:45",
          "11:00",
          "11:15",
          "11.30",
          "11:45",
          "07:00",
        ],
      },
      {
        dayPeriod: "afternoon",
        time: [
          {
            busOperateContinuouslyTime: [
              { timeStart: "12:00", timeEnd: "14:00" },
            ],
          },
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
          {
            busOperateContinuouslyTime: [
              { timeStart: "16:00", timeEnd: "19:00" },
            ],
          },
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
    // ---------------------------  busWaitingTimeWeekends ---------------------------
    busWaitingTimeWeekends: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10:30", "11:30", "12.30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30", "23:00"],
      },
    ],
  },

  // -------------------------- Third Route Data --------------------------
  {
    route: 3,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: ["K10"],
    destinationPoint: "MainCampus",

    // The data on waiintg time for the bus same for weekends and weekdays
    busWaitingTimeWeekDays: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:15", "09:00", "10.30", "11:30", "12:30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "15.30", "16:30", "17:15", "18:00", "18:45"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30"],
      },
    ],
    // ---------------------------  busWaitingTimeWeekends ---------------------------
    busWaitingTimeWeekends: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10:30", "11:30", "12.30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30", "23:00"],
      },
    ],
  },
  // -------------------------- Fourth Route Data --------------------------
  {
    route: 4,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: ["KMB"],
    destinationPoint: "MainCampus",
    // The data on waiintg time for the bus same for weekends and weekdays
    busWaitingTimeWeekDays: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10.30", "11:30", "12:30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "14:30", "15.30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30"],
      },
    ],
    busWaitingTimeWeekends: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10.30", "11:30", "12:30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "14:30", "15.30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30"],
      },
    ],
  },
  // -------------------------- Fifth Route Data --------------------------
  {
    route: 5,
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    waitingPoint: ["KPZ", "KTAG", "SERUMPUN"],
    destinationPoint: "AgroBio",
    busWaitingTimeWeekDays: [
      {
        dayPeriod: "morning",
        time: [
          {
            busOperateContinuouslyTime: [
              { timeStart: "07:00", timeEnd: "10:00" },
            ],
          },
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10.30",
          "11:00",
        ],
      },
      {
        dayPeriod: "afternoon",
        time: [
          {
            busOperateContinuouslyTime: [
              { timeStart: "12:00", timeEnd: "14:00" },
            ],
          },
          "15.00",
          "15.30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
        ],
      },
      {
        dayPeriod: "evening",
        time: ["19:30", "20:30", "21:30", "22:30"],
      },
    ],

    // ---------------------------  busWaitingTimeWeekends ---------------------------
    busWaitingTimeWeekends: [
      {
        dayPeriod: "morning",
        time: ["07:30", "08:30", "09:30", "10:30", "11:30", "12.30"],
      },
      {
        dayPeriod: "afternoon",
        time: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30"],
      },
      {
        dayPeriod: "evening",
        time: ["19:30"],
      },
    ],
  },
];

export default busSchedules;
