FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY . . 
RUN npm install 
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80