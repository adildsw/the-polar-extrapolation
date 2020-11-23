# The Polar Extrapolation
**A web-application tool for visualizing the spatial and temporal changes in the Polar ice conditions.**

<img align='center' src='https://github.com/adildsw/the-polar-extrapolation/blob/master/assets/title.png' />

<b>The Polar Extrapolation</b> is a web-application built during the 24-hour <a href="https://2018.spaceappschallenge.org">NASA Space Apps Challenge 2018</a> for the problem statement <a href="https://2018.spaceappschallenge.org/challenges/icy-glare/recycle-polar-opposites/details">Polar Opposites</a> by the team <a href="https://2018.spaceappschallenge.org/challenges/icy-glare/recycle-polar-opposites/teams/caffeinejunkiexl/stream">CaffeineJunkieXL</a>. Built using Angular and Python, this web-application serves as a tool for visualizing the spatial and temporal changes in the Arctic and Antarctice ice conditions. The sytem uses data collected from [NSIDC](https://nsidc.org) and [NASA](https://climate.nasa.gov), and then preprocesses and interprets it for the general audience.

## Getting Started
The following instructions will help you get this system up and running in your local system.

### Prerequisites
Before proceeding to the installation, make sure that your system contains all the prerequisites.
#### 1. Install Python 3.6+ ([Anaconda](https://www.anaconda.com/download/) distribution recommended)
#### 2. Install Python Dependencies
Run the following commands on the terminal to install all the dependencies:
```
conda install -c anaconda flask
conda install -c anaconda flask-cors
conda install -c conda-forge flask-restful
```
#### 3. Install [Node.js and npm](https://nodejs.org/en/download/)
#### 4. Install Angular CLI
Run the following command on the terminal to install Angular CLI
```
npm install -g @angular/cli
```

### Compiling Source
Once all the prerequisites are installed, run the following commands on the terminal to compile the source code on your system:
#### 1. Clone Source from GitHub
```
git clone https://github.com/adildsw/the-polar-extrapolation/
```
#### 2. Install Project Dependencies
```
cd the-polar-extrapolation
npm install
```
#### 3. Build Source
```
ng build
```

### Hosting the Server
If the source is compiled successfully without any errors, follow these steps to host the Python Flask server (backend) and Angular server (frontend):
#### 1. Python Flask Server
Open a new terminal and navigate to _the-polar-extrapolation_ folder. Then run the following commands:
```
cd server
python server.py
```
Upon successful Flask server hosting, the terminal should return the following message:
```
 * Serving Flask app "server" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5002/ (Press CTRL+C to quit)
```
#### 2. Angular Server
In a new terminal, navigate to _the-polar-extrapolation_ folder. Then run the following command:
```
ng serve
```
Upon successful Angular server hosting, the terminal should return the following message:
```
 ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
 i ｢wdm｣: Compiled successfully.
```

### Launching the System
Once both the servers are hosted and running, open your browser and navigate to ***http://localhost:4200/***.
Upon launch, the following screen should pop up:

<img align='center' src='https://github.com/adildsw/the-polar-extrapolation/blob/master/assets/landing.png' />

**NOTE: The system is best viewed in a 1080p display.**

## Dataset Sources
The following datasets are used in the making of this system:
* https://nsidc.org/data/GLAH12
* https://nsidc.org/data/G02135
* https://climate.nasa.gov/vital-signs/sea-level/
* https://nsidc.org/data/NSIDC-0393
