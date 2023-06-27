FROM node:18.12.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
CMD [ "node", "app.js" ]