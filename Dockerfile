FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm audit fix

COPY . .

EXPOSE 3000

RUN npm run buil

CMD [ "npm", "start" ] // start server inside container