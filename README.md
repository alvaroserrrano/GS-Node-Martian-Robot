[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/alvaroserrrano/GS-MartianRobots">
    <img src="images/guidesmiths-logo.png" alt="Guidesmith" width="80" height="80">
  </a>

  <h3 align="center">NODE_ASSESMENT</h3>

  <p align="center">
    NODE - Martian Robots
    <br />
    <a href="https://github.com/alvaroserrrano/GS-MartianRobots"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alvaroserrrano/GS-MartianRobots">View Demo</a>
    ·
    <a href="https://github.com/alvaroserrrano/GS-MartianRobots/issues">Report Bug</a>
    ·
    <a href="https://github.com/alvaroserrrano/GS-MartianRobots/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### Built With

- [NodeJS](https://nodejs.org/en/)
- [Javascript]()
- []()

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

- [Docker](https://docs.docker.com/install/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/alvaroserrrano/GS-MartianRobots.git
```

2. Install NPM packages

```sh
npm install
```

## Docker

### Build image

```
$ docker build -t aserranorivas/martian-robots .
```

### Run container

```
$ docker run -p 49160:8080 aserranorivas/martian-robots
```

### Test the app

```
$ npm run test
```

<!-- THE PROBLEM -->

## The problem

The surface of Mars can be modelled by a rectangular grid around which robots are
able to move according to instructions provided from Earth. You are to write a program
that determines each sequence of robot positions and reports the final position of the
robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed
by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot
instruction is a string of the letters "L", "R", and "F" which represent, respectively, the
instructions:

- Left: the robot turns left 90 degrees and remains on the current grid point.
- Right: the robot turns right 90 degrees and remains on the current grid point.
- Forward: the robot moves forward one grid point in the direction of the current
  orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x,
y+1).
There is also a possibility that additional command types may be required in the future
and provision should be made for this.
Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that
moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent"
that prohibits future robots from dropping off the world at the same grid point. The scent
is left at the last grid position the robot occupied before disappearing over the edge. An
instruction to move "off" the world from a grid point from which a robot has been
previously lost is simply ignored by the current robot.

<!-- INPUT-->

## Input

The first line of input is the upper-right coordinates of the rectangular world, the
lower-left coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of robot positions and instructions (two lines
per robot). A position consists of two integers specifying the initial coordinates of the
robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot
instruction is a string of the letters "L", "R", and "F" on one line.
Each robot is processed sequentially, i.e., finishes executing the robot instructions
before the next robot begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.

<!--OUTPUT-->

## Output

For each robot position/instruction in the input, the output should indicate the final grid
position and orientation of the robot. If a robot falls off the edge of the grid the word
"LOST" should be printed after the position and orientation.

````

Sample input
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL

Sample output
1 1 E
3 3 N LOST
2 3 S

```

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/alvaroserrrano/GS-MartianRobots/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@alvaro-serrano-rivas](https://linkedin.com/alvaro-serrano-rivas) - alvaro.serrano@wmich.edu

Project Link: [https://github.com/alvaroserrrano/GS-MartianRobots](https://github.com/alvaroserrrano/GS-MartianRobots)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/alvaroserrrano/repo.svg?style=flat-square
[contributors-url]: https://github.com/alvaroserrrano/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alvaroserrrano/repo.svg?style=flat-square
[forks-url]: https://github.com/alvaroserrrano/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/alvaroserrrano/repo.svg?style=flat-square
[stars-url]: https://github.com/alvaroserrrano/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/alvaroserrrano/repo.svg?style=flat-square
[issues-url]: https://github.com/alvaroserrrano/repo/issues
[license-shield]: https://img.shields.io/github/license/alvaroserrrano/repo.svg?style=flat-square
[license-url]: https://github.com/alvaroserrrano/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alvaroserrano
[product-screenshot]: images/screenshot.png
```
````
