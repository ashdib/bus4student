# Bus Student

This project is a web application for managing bus schedules.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- npm

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

## Usage

How to use this app.

### Bus Class

The `Bus` class in [`controllers/appController.js`](controllers/appController.js) represents a bus object. It has several methods:

- `getAllBusesData()`: Retrieves all buses data.
- `getBusRoute()`: Retrieves the bus route based on the waiting point and destination point.
- `getBusWaitingTime()`: Retrieves the bus waiting time based on the day period.
- `getBusOperateContinuouslyTime()`: Retrieves the bus operate continuously time based on the day period.

## Running the tests

Explain how to run the automated tests for this system.

## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [EJS](https://ejs.co/) - Templating language
- [Axios](https://axios-http.com/) - Promise based HTTP client

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Your Name** - *Initial work* - [YourName](https://github.com/yourname)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc