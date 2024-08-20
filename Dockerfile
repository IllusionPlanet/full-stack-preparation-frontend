FROM node:16 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]



