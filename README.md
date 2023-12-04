<br/>
<p align="center">
  <h3 align="center">IT Portal</h3>

  <p align="center">
    Asset Manager and Ticketing System for IT Professionals
    <br/>
    <br/>
    <a href="https://github.com/kyletucci/it-asset-ticketing">View Demo</a>
    .
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/kyletucci/it-asset-ticketing/total) ![Contributors](https://img.shields.io/github/contributors/kyletucci/it-asset-ticketing?color=dark-green) ![Forks](https://img.shields.io/github/forks/kyletucci/it-asset-ticketing?style=social) ![Stargazers](https://img.shields.io/github/stars/kyletucci/it-asset-ticketing?style=social) ![Issues](https://img.shields.io/github/issues/kyletucci/it-asset-ticketing) ![License](https://img.shields.io/github/license/kyletucci/it-asset-ticketing) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://res.cloudinary.com/dcwvykrxv/image/upload/v1701694697/et548bzodkaa31acv56v.png)

There are many great Asset Managers and Ticketing Systems available on to IT Professionals, however, I didn't find one that really suited my specific needs so I created this one. I want to create an IT Portal so amazing that it'll be the last one you ever need.

Here's why:

* Your time should be focused on assisting end-users, not sorting through emails and fielding walk-ups to keep track of issues.
* You should have control over your domain and have clear view of your compliance with your companies lifecycle standards.
* You should have a one stop shop to keep your tasks on track and your assets under control

Of course, no one IT portal will serve all businesses since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

## Built With

MongoDB, Express.js, Node.js, EJS, Mongoose

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

```sh
npm install
```

### Installation

Create a .env file in config folder and add the following as key = value

    PORT = 2121 (can be any port example: 3000)
    DB_STRING = your database URI
    CLOUD_NAME = your cloudinary cloud name
    API_KEY = your cloudinary api key
    API_SECRET = your cloudinary api secret

## Usage

Sign up for an account and login

![Signup](https://res.cloudinary.com/dcwvykrxv/image/upload/v1701695801/j1othfyol7ql84okm0x7.png)

To use the Asset Manager enter Primary User, Department, Computer Model, Service Tag, Deploy Date, and Expiration Date for any support contracts

Assets will be highlighted red if the Expiration Date is within 30 days of the current date
 
![Asset Manager](https://res.cloudinary.com/dcwvykrxv/image/upload/v1701694697/et548bzodkaa31acv56v.png)

To use the Ticketing System enter a Subject, a short Description of your issue and the Severity of the problem

High Severity issues will be highlighted in red and Medium Severity issues will be highlighted in yellow for a more visual organization of concerns 

![Ticketing System](https://res.cloudinary.com/dcwvykrxv/image/upload/v1701694697/h9fm4rrxrr0upunqfflv.png)

## Roadmap

Future improvements include
- Adding the ability to assign tickets to specific IT employees
- Additional styling to improve UX
- Ability to filter tickets by severity and user
- Add ability to sort Assets and Tickets by table header in ascending and descending

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/kyletucci/it-asset-ticketing/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/kyletucci/it-asset-ticketing/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/kyletucci/it-asset-ticketing/blob/main/LICENSE.md) for more information.

## Authors

* **Kyle Tucci** - *Software Engineer* - [Kyle Tucci](https://github.com/kyletucci/) - *Built IT Portal*
