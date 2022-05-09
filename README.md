# README

## Presentation

This project is the frontend part of the [lior project](https://github.com/linoleparquet/lior).

### Source

It's an Angular project based on the [Paper Dashboard Angular Project](https://www.creative-tim.com/product/paper-dashboard-angular)

The map comes from mapbox
The svg marker comes from [Iconic](https://useiconic.com/open/)

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
docker run -p80:80 lior-frontend -d
```

## Accessing dashboard

`http://localhost`

## Release a version

New version are relased from the master branch.
First create a tag on the local branch. Only tags starting by 'v' will trigger the relase of a docker image. Example: `git tag 'v1.0.1'`
Then push the local tag to the remote branch. Example: `git push origin v1.0.1`
The docker image will be available for pulling. `docker pull ghcr.io/linoleparquet/lior-frontend:v1.0.1`
