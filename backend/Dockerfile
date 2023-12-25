FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["nodemon", ["gateway.js","microservices/userMicroService.js","nodemon microservices/productMicroService.js","nodemon microservices/cartMicroService.js"]]