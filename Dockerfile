FROM node:8.11

RUN apt-get update && apt-get install libusb-1.0-0-dev -y

WORKDIR /app

COPY dist .

RUN npm install

ENTRYPOINT ["npm", "run", "start"]