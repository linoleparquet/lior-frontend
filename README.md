# README

## Presentation

This project is the frontend part of the [lior project](https://github.com/linoleparquet/lior). 
It's an Angular project based on the [Paper Dashboard Angular Project](https://www.creative-tim.com/product/paper-dashboard-angular)

## Running the app for local developement 
```bash
npm install 
npm start
```
## Building the image
```bash
docker build -t lior-frontend .
```

## Running the image
```bash
docker run -p80:80 lior-frontend
```

## Accessing dashboard
`http://localhost`