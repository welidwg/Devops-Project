FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY start.sh .

RUN chmod +x start.sh

EXPOSE 3001

CMD ["./start.sh"]